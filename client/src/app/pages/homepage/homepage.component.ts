import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';

import { LoginService } from '../../login.service';
import { PlaylistService } from '../../playlist.service';
import { Playlist } from '../../../../../common/playlist';
import { Category } from '../../../../../common/category';
import { Music } from '../../../../../common/music';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  playlists: Playlist[] = [];
  playlistsTrending: Playlist[] = [];
  playlistsPublic: Playlist[] = [];
  playlistsUser: Playlist[] = [];
  isLogged: boolean = false;
  userId: number = 0;

  constructor(private playlistService: PlaylistService, private loginService: LoginService, private userService: UserService) { }

  ngOnInit(): void {
    this.loginService.getLoginStatus().subscribe(newStatus => {
      this.isLogged = newStatus;
    });

    this.playlistService.getPlaylists().subscribe(
      as => { this.playlists = as;
              this.playlistsPublic = this.playlists.filter((playlist) => playlist.availability === "public"); 
              this.playlistsTrending = this.playlists.sort((a, b) => b.followers.length - a.followers.length);
              this.playlistsUser = this.playlists.filter(playlist => playlist.ownerId == this.userId) },
      msg => { alert(msg.message); }
    );

    this.userService.getUserId().subscribe(
      as => { this.userId = as; },
      msg => { alert(msg.message); }
    )
  }
}
