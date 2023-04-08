import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {PlaylistService} from 'src/app/playlist.service';

import {Category} from '../../../../../common/category';
import {Music} from '../../../../../common/music';
import {Playlist} from '../../../../../common/playlist';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-playlist-recomendadas',
  templateUrl: './playlist-recomendadas.component.html',
  styleUrls: ['./playlist-recomendadas.component.scss']
})
export class PlaylistRecomendadasComponent implements OnInit {
  constructor(private playlistService: PlaylistService, private titleService:Title) {}

  playlists: Playlist[] = [];
  playlistsRecomendadas: Playlist[] = [];


  ngOnInit(): void {
    this.titleService.setTitle("Explorar")
    this.playlistService.getPlaylists().subscribe(
        (as) => {
          this.playlists = as;
          this.playlistsRecomendadas =
              this.playlists.filter((playlist) => playlist.id <= 4);
        },
        (msg) => {
          alert(msg.message);
        });
  }

  selectedPlaylist: any;

  onPlay(playlist: any) {
    // Stop playing any previously selected playlist
    if (this.selectedPlaylist) {
      this.selectedPlaylist.isPlaying = false;
    }
    if (this.selectedPlaylist == playlist) {
      this.selectedPlaylist.isPlaying = false;
    } else {
      // Set the new selected playlist and start playing
      this.selectedPlaylist = playlist;
      this.selectedPlaylist.isPlaying = true;
    }
  }
}
