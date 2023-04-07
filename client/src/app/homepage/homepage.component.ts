import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';

import { LoginService } from '../login.service';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../../../../common/playlist';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  plEma : Playlist[] = [];
  plPub : Playlist[] = [];
  plRec : Playlist[] = [];
  plMin : Playlist[] = [];

  isLogged : boolean = false;

  constructor(private playlistService : PlaylistService, private loginService : LoginService){
    //Temporário
    this.plEma = [
      {
        id: 1,
        name: 'Playlist 1',
        ownerId: 0,
        isPublic: true,
        categories: ['pop', 'rock'],
        musics: [
          { id: 1, name: "Song 1", author: "Author 1", image: "image1.jpg", link: "link1.mp3", duration: 180 },
          { id: 2, name: "Song 2", author: "Author 2", image: "image2.jpg", link: "link2.mp3", duration: 240 }
        ],
        image: 'playlist1.jpg'
      },
      {
        id: 2,
        name: 'Playlist 2',
        categories: ['jazz', 'blues'],
        ownerId: 0,
        isPublic: true,
        musics: [
          { id: 1, name: "Song 1", author: "Author 1", image: "image1.jpg", link: "link1.mp3", duration: 180 },
          { id: 2, name: "Song 2", author: "Author 2", image: "image2.jpg", link: "link2.mp3", duration: 240 }
        ],
        image: 'playlist2.jpg'
      },
      {
        id: 3,
        name: 'Playlist 3',
        ownerId: 0,
        isPublic: true,
        categories: ['pop', 'hip hop'],
        musics: [
          { id: 1, name: "Song 1", author: "Author 1", image: "image1.jpg", link: "link1.mp3", duration: 180 },
          { id: 2, name: "Song 2", author: "Author 2", image: "image2.jpg", link: "link2.mp3", duration: 240 }
        ],
        image: 'playlist3.jpg'
      },
      {
        id: 4,
        name: 'Playlist 4',
        ownerId: 0,
        isPublic: true,
        categories: ['rock', 'metal'],
        musics: [
          { id: 1, name: "Song 1", author: "Author 1", image: "image1.jpg", link: "link1.mp3", duration: 180 },
          { id: 2, name: "Song 2", author: "Author 2", image: "image2.jpg", link: "link2.mp3", duration: 240 }
        ],
        image: 'playlist4.jpg'
      },
      {
        id: 5,
        name: 'Playlist 5',
        ownerId: 0,
        isPublic: true,
        categories: ['pop', 'indie'],
        musics: [
          { id: 1, name: "Song 1", author: "Author 1", image: "image1.jpg", link: "link1.mp3", duration: 180 },
          { id: 2, name: "Song 2", author: "Author 2", image: "image2.jpg", link: "link2.mp3", duration: 240 }
        ],
        image: 'playlist5.jpg'
      }
    ];
    this.plPub = this.plEma;
    this.plMin = this.plEma;
    this.plRec = this.plEma;
  }

  ngOnInit(): void {
    this.loginService.getLoginStatus().subscribe(newStatus => {
			this.isLogged = newStatus;
		});
    /*
    this.playlistService.getPlaylistEA()
      .pipe(
        tap({
          next: as => { this.plEma = as; },
          error: msg => { alert(msg.message); }
        })
      )
      .subscribe();

    this.playlistService.getPlaylistPB()
      .pipe(
        tap({
          next: as => { this.plPub = as; },
          error: msg => { alert(msg.message); }
        })
      )
      .subscribe();

    this.playlistService.getPlaylistRC()
      .pipe(
        tap({
          next: as => { this.plRec = as; },
          error: msg => { alert(msg.message); }
        })
      )
      .subscribe();

    this.playlistService.getPlaylistMP()
          .pipe(
            tap({
              next: as => { this.plMin = as; },
              error: msg => { alert(msg.message); }
            })
          )
          .subscribe();

    //Depreciado
    /*
    this.playlistService.getPlaylistEA()
          .subscribe(
            as => { this.plEma = as; },
            msg => { alert(msg.message); }
           );
    */
  }
}
