import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';

import { LoginService } from '../../login.service';
import { PlaylistService } from '../../playlist.service';
import { Playlist } from '../../../../../common/playlist';
import { Category } from '../../../../../common/category';
import { Music } from '../../../../../common/music';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  playlists: Playlist[] = [];
  isLogged: boolean = false;

  constructor(private playlistService: PlaylistService, private loginService: LoginService) {
    
  }

  ngOnInit(): void {
    this.loginService.getLoginStatus().subscribe(newStatus => {
      this.isLogged = newStatus;
    });

    this.playlistService.getPlaylists()
      .subscribe(
        as => { this.playlists = as; },
        msg => { alert(msg.message); }
      );    

    // this.playlistService.getPlaylistRC()
    //   .pipe(
    //     tap({
    //       next: as => { this.plRec = as; },
    //       error: msg => { alert(msg.message); }
    //     })
    //   )
    //   .subscribe();
    /*
    

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
