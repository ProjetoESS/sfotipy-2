import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import { Playlist } from './Playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private appURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPlaylistEA() :  Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.appURL + "/playlist-em-alta")
              .pipe(
                retry(2)
              );
  }

  getPlaylistPB() :  Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.appURL + "/playlist-publica")
              .pipe(
                retry(2)
              );
  }

  getPlaylistRC() :  Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.appURL + "/playlist-recomendada")
              .pipe(
                retry(2)
              );
  }

  getPlaylistMP() :  Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.appURL + "/playlist-minha")
              .pipe(
                retry(2)
              );
  }
}
