import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PlaylistService {

  private taUrl = 'http://localhost:3000/'
  private playlistCategories : string[] = [];
  private allCategories: string[] = [];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http : HttpClient) { }

  getCategories(id: number){
    this.http.get<string[]>(this.taUrl + "playlist/category/" + id)
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
    this.http.get(this.taUrl + "playlist/category")
        .pipe(
          map((res: any) => res.categories)
        ).subscribe(
          (categories:string[]) => {
            this.allCategories = categories;
        })
    return this.allCategories;
  }

  addNewCategory(id: number, category : string) {
    return this.http.post(this.taUrl + "playlist/category/" + id, category, this.httpOptions)
          .pipe(retry(2));
  }

  deleteCategory(id: number, category: string) {
    
    const data = {
      params:{
        category:category
      }
    };

    return this.http.delete(this.taUrl + "playlist/category" + id, data)
          .pipe(retry(2));
  }

}
