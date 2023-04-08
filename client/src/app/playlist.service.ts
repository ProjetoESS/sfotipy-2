import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { retry, map } from 'rxjs/operators';

import { Playlist } from '../../../common/playlist';
import { Observable } from 'rxjs';
import { Category } from '../../../common/category';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private appURL = 'http://localhost:3000';

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
        return response.map(item => new Playlist(<Playlist>{...item}));
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
        retry(2)
      );
  }

  getPlaylistCategories(id : number) : Observable<Category[]> {
    return this.http.get<Category[]>(this.appURL + "/category/" + id)
      .pipe(
        retry(2)
      );
  }

  getAllCategories() : Observable<Category[]> {
    return this.http.get<Category[]>(this.appURL + "/category")
          .pipe(
            retry(2)
          );
  }

  addNewCategory(id : number, category : Category) : Observable<Category | null> {
    return this.http.post<any>(this.appURL + "/category/" + id, {category: category}, this.httpOptions)
    .pipe(
      retry(2),
      map(res => {if (res.success) {return category;} else {return null;}})
    )
  }

  deleteCategory(id : number, category : Category) {
    const data = {category : category}
    return this.http.delete<any>(this.appURL + "/category/" + id, {body : data})
    .pipe(
      retry(2),
      map(res => {if (res.success) {return category;} else {return null;}})
    )
  }

  getPlaylists(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.appURL + "/playlists")
      .pipe(
        retry(2)
      );
  }

  getPlaylistById(id: number): Observable<Playlist> {
    return this.http.get<Playlist>(this.appURL + "/playlist/" + id)
      .pipe(
        retry(2)
      );
  }
}
