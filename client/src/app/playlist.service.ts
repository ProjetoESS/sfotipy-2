import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PlaylistService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private taUrl = 'http://localhost:3000/'

  constructor(private http : HttpClient) { }

  getCategories(id: number) : Observable<string[] | null> {
    return this.http.get<string[]>(this.taUrl + "playlist/category/" + id)
        .pipe( retry(2) )
  }

}
