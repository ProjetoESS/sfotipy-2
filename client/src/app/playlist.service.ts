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
  private playlistCategories: Category[] = [];
  private allCategories: Category[] = [];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

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
