import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

import { MusicasService } from 'src/app/musicas.service';
import { Music } from '../../../../../common/music';
import { Playlist } from '../../../../../common/playlist';
import { PlaylistService } from 'src/app/playlist.service';

@Component({
  selector: 'app-page-busca',
  templateUrl: './page-busca.component.html',
  styleUrls: ['./page-busca.component.scss']
})
export class PageBuscaComponent {
  link = "/assets/playlists/1/cover.png";
  id = "2";
  filterText: string = '';

  playlists: Playlist[] = [];
  musics: Music[] = [];

  constructor(private musicasService: MusicasService, private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.musicasService.getMusics()
      .subscribe(
        as => { this.musics = as; },
        msg => { alert(msg.message); }
      );
    this.playlists = this.playlistService.getPlaylists();
  }

}
