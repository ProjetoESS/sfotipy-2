import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

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

  @Input() isLogged: boolean = true;

  constructor(private playlistService : PlaylistService){
    
  }

  ngOnInit(): void {
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
