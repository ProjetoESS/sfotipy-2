import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../../../../common/playlist';
import { UserPlaylistsModule } from './user_playlists.module';

@Component({
  selector: 'app-root',
  templateUrl: './user_playlists.component.html',
  styleUrls: ['./user_playlists.component.css']
})

export class UserPlaylistsComponent implements OnInit {
  user_id: number = 1

    constructor(private router: Router, private playlistService : PlaylistService) {}

    numPlaylists: number = 2; // Número de playlists cadastradas
    playlists: Playlist[] = []

    redirectplaylist(id: number) {
      this.router.navigate(['/playlist/', id])
    }

    redirecionarParaCriarPlaylist() {
      this.router.navigate(['/criar_playlist']);
    }

    ngOnInit(): void {

        this.playlistService.getUserPlaylists(this.user_id).subscribe(playlists => {
        this.playlists = playlists;
        this.numPlaylists = this.playlists.length;


    })
  }
}
