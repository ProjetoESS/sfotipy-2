import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, map } from 'rxjs/operators';
import { Playlist } from '../../../common/playlist';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
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

  getCategories(id: number) {
    this.http.get<string[]>(this.appURL + "playlist/category/" + id)
      .pipe(
        map((res: any) => res)
      ).subscribe(
        (res: Category[]) => {
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
        (categories: Category[]) => {
          this.allCategories = categories;
        })
    return this.allCategories;
  }

  addNewCategory(id: number, category: Category) {
    return this.http.post(this.appURL + "playlist/category/" + id, category, this.httpOptions)
      .pipe(retry(2));
  }

  deleteCategory(id: number, category: Category) {
    const data = JSON.stringify(category);
    return this.http.delete(this.appURL + "playlist/category" + id, { body: data })
      .pipe(retry(2));
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

  recommendPlaylists(userPlaylists: Playlist[], allPlaylists: Playlist[]): Observable<Playlist[]> {
    const categoriesMine = new Set(userPlaylists.flatMap(p => p.categories));
    let sortPlaylist = (allPlaylists.sort((p1, p2) => {
      const categoriesP1 = new Set(p1.categories);
      const categoriesP2 = new Set(p2.categories);
      const similarityP1 = this.getSimilarityScore(categoriesMine, categoriesP1);
      const similarityP2 = this.getSimilarityScore(categoriesMine, categoriesP2);
      return similarityP2 - similarityP1;
    }));

    const recommendedPlaylist = new BehaviorSubject<Playlist[]>(sortPlaylist);
    return recommendedPlaylist.asObservable();
  }

  getSimilarityScore(setA: Set<number>, setB: Set<number>): number {
    const intersection = new Set([...setA].filter(x => setB.has(x)));
    const union = new Set([...setA, ...setB]);
    return intersection.size / union.size;
  }
}
