import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PlaylistService {

  private taUrl = 'http://localhost:3000/'

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http : HttpClient) { }

  getCategories(id: number){
    return this.http.get<string[]>(this.taUrl + "playlist/category/" + id)
        .pipe( retry(2) );
  }

  getAllCategories() {
    return this.http.get<string[]>(this.taUrl + "playlist/category")
        .pipe(retry(2));
  }

  addNewCategory(id: number, category : string) {
    return this.http.post(this.taUrl + "playlist/category/" + id, category, this.httpOptions)
          .pipe(retry(2));
  }

  deleteCategory(id: number, categories: string) {
    
    const data = {
      params:{
        category:categories
      }
    };

    return this.http.delete(this.taUrl + "playlist/category" + id, data)
          .pipe(retry(2));
  }

}
