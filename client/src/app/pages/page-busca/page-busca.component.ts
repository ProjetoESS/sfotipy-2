import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { MusicasService } from 'src/app/musicas.service';
import { PlaylistService } from 'src/app/playlist.service';

import { Music } from '../../../../../common/music';
import { Playlist } from '../../../../../common/playlist';
import { Category } from '../../../../../common/category';

@Component({
  selector: 'app-page-busca',
  templateUrl: './page-busca.component.html',
  styleUrls: ['./page-busca.component.scss']
})
export class PageBuscaComponent {
  link = '/assets/playlists/1/cover.png';
  id = '2';
  filterText: string = '';

  musicIsActive: boolean = true;
  playlistIsActive: boolean = true;

  showAllMusic: boolean = false;

  playlists: Playlist[] = [];
  musics: Music[] = [];
  categories: Category[] = [
    new Category(<Category>{ 'id': 1, 'name': 'Pop' }),
    new Category(<Category>{ 'id': 2, 'name': 'Rock' }),
    new Category(<Category>{ 'id': 3, 'name': 'Electronic' }),
    new Category(<Category>{ 'id': 4, 'name': 'Hip-Hop' }),
    new Category(<Category>{ 'id': 5, 'name': 'KPop' }),
    new Category(<Category>{ 'id': 6, 'name': 'Indie' })
  ];

  selectedOptions: string[] = [];

  constructor(
    private musicasService: MusicasService,
    private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.musicasService.getMusics()
      .subscribe(
        as => { this.musics = as; },
        msg => { alert(msg.message); }
      );
    this.playlistService.getPlaylists()
      .subscribe(
        as => { this.playlists = as; },
        msg => { alert(msg.message); }
      );
  }

  activateMusicas() {
    this.musicIsActive = !this.musicIsActive;
  }

  activatePlaylists() {
    this.playlistIsActive = !this.playlistIsActive;
  }
}
