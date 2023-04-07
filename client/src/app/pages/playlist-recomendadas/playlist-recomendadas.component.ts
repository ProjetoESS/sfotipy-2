import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Playlist } from '../../../../../common/playlist';
import { Music } from '../../../../../common/music';
import {PlaylistService} from 'src/app/playlist.service';
import { Category } from '../../../../../common/category';
@Component({
  selector: 'app-playlist-recomendadas',
  templateUrl: './playlist-recomendadas.component.html',
  styleUrls: ['./playlist-recomendadas.component.scss']
})
export class PlaylistRecomendadasComponent implements OnInit {

  constructor(private playlistService: PlaylistService) {}

  playlists:Playlist[] = [];

  ngOnInit(): void {

    this.playlistService.getPlaylists()
      .subscribe(
        as => { this.playlists = as; },
        msg => { alert(msg.message); }
      );
  };

  selectedPlaylist: any;

  onPlay(playlist: any) {
    // Stop playing any previously selected playlist
    if (this.selectedPlaylist) {
      this.selectedPlaylist.isPlaying = false;
    }
    if (this.selectedPlaylist == playlist) {
      this.selectedPlaylist.isPlaying = false;
    }
    else {
      // Set the new selected playlist and start playing
      this.selectedPlaylist = playlist;
      this.selectedPlaylist.isPlaying = true;
    }
  }
}
