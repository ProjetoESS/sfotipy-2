import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, map } from 'rxjs/operators';
import { User } from '../../../common/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
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

  getUserById(userId : number) : Observable<User> {
    return this.http.get<User>(this.appURL + "/users/${userId}")
      .pipe(
        retry(2)
      );
  }
}
