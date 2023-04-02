import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import { Playlist } from '../../../common/playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private appURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCategories(id: number): Observable<string[] | null> {
    return this.http.get<string[]>(this.appURL + "playlist/category/" + id)
      .pipe(retry(2))
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
