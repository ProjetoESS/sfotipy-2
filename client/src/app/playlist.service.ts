import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { retry, map } from 'rxjs/operators';

import { Playlist } from '../../../common/playlist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private appURL = 'http://localhost:3000';
  private playlistCategories: string[] = [];
  private allCategories: string[] = [];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  addPlaylist(playlist: Playlist) {
    return this.http.post(`${this.appURL}/criar_playlist`, playlist, this.httpOptions)
      .pipe(retry(2));
  }

  verificarNomePlaylistExistente(name: string): Observable<boolean> {
    const url = `${this.appURL}/?name=${name}`;
    return this.http.get<boolean>(url);
  }

  getUserPlaylists(ownerId: any): Observable<Playlist[]>  {
    console.log('ownerId:', ownerId); // adicione esta linha
    const url = `${this.appURL}/minhas_playlists`;
    return this.http.get<any[]>(url).pipe(
      map(response => {
        console.log('response:', response); // adicione esta linha
        return response.map(item => new Playlist(item.id, item.name, item.ownerId, item.musics, item.isPublic, item.categories, item.image));
      }),
      map(playlists => {
        console.log('playlists:', playlists.filter(playlist => playlist.ownerId === ownerId)); // adicione esta linha
        return playlists.filter(playlist => playlist.ownerId === ownerId);
      })
    );
  }

  /*getUserPlaylists(ownerId: number): Observable<Playlist> {
    const url = `${this.appURL}/minhas_playlists`;
    return this.http.get<any[]>(url).pipe(
      map(response => {
        console.log(response)
        const firstItem = response[0]; // assumindo que a resposta sempre retorna um único item
        return new Playlist(firstItem.id, firstItem.name, firstItem.ownerId, firstItem.musics, firstItem.isPublic, firstItem.categories, firstItem.image);
      })
    );
  } */

  getCategories(id: number) {
    this.http.get<string[]>(this.appURL + "playlist/category/" + id)
      .pipe(
        map((res: any) => res)
      ).subscribe(
        (res: string[]) => {
          this.playlistCategories = res;
        }
      );
    return this.playlistCategories;
  }

  getAllCategories() {
    this.http.get(this.appURL + "playlist/category")
      .pipe(
        map((res: any) => res.categories)
      ).subscribe(
        (categories: string[]) => {
          this.allCategories = categories;
        })
    return this.allCategories;
  }

  addNewCategory(id: number, category: string) {
    return this.http.post(this.appURL + "playlist/category/" + id, category, this.httpOptions)
      .pipe(retry(2));
  }

  deleteCategory(id: number, category: string) {

    const data = {
      params: {
        category: category
      }
    };

    return this.http.delete(this.appURL + "playlist/category" + id, data)
      .pipe(retry(2));
  }

  getPlaylistEA(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.appURL + "/playlist-em-alta")
      .pipe(
        retry(2)
      );
  }

  getPlaylistPB(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.appURL + "/playlist-publica")
      .pipe(
        retry(2)
      );
  }

  getPlaylistRC(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.appURL + "/playlist-recomendada")
      .pipe(
        retry(2)
      );
  }

  getPlaylistMP(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.appURL + "/playlist-minha")
      .pipe(
        retry(2)
      );
  }
}
