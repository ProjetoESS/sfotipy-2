import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

import { PlaylistService } from '../playlist.service';
import { Playlist } from '../Playlist';

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

  /*
  plEma : Array<[string, string]>;
  plPub : Array<[string, string]>;
  plRec : Array<[string, string]>;
  plMin : Array<[string, string]>;
  */

  @Input() isLogged : boolean = true;

  constructor(private playlistService : PlaylistService){
    //Temporário
    /*
    this.plEma = [["plst1", "/assets/cover9.jpg"], ["plst2", "/assets/cover3.webp"], ["plst3", "/assets/cover5.webp"], 
                  ["plst4", "/assets/cover1.jpg"], ["plst5", "/assets/cover2.jpg"]]

    this.plPub = [["plst1", "/assets/cover1.jpg"], ["plst2", "/assets/cover2.jpg"], ["plst3", "/assets/cover3.webp"], 
                  ["plst4", "/assets/cover4.webp"], ["plst5", "/assets/cover5.webp"]];

    this.plRec = [["plst1", "/assets/cover6.jpg"], ["plst2", "/assets/cover7.jpg"], ["plst3", "/assets/cover8.jpg"], 
                  ["plst4", "/assets/cover9.jpg"], ["plst5", "/assets/cover1.jpg"]];

    this.plMin = [["plst1", "/assets/cover2.jpg"], ["plst2", "/assets/cover3.webp"], ["plst3", "/assets/cover4.webp"], 
                  ["plst4", "/assets/cover5.webp"], ["plst5", "/assets/cover6.jpg"]];
    */
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
          
    /*
    this.playlistService.getPlaylistEA()
          .subscribe(
            as => { this.plEma = as; },
            msg => { alert(msg.message); }
           );
    */
  }
}
