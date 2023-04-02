import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

import { MusicasService } from 'src/app/musicas.service';
import { Music } from '../../../../../server/src/music';

@Component({
  selector: 'app-page-busca',
  templateUrl: './page-busca.component.html',
  styleUrls: ['./page-busca.component.scss']
})
export class PageBuscaComponent {
  link = "/assets/playlists/1/cover.png";
  id = "2";
  filterText: string = '';


  musics: Music[] = [];

  constructor(private musicasService: MusicasService) { }

  ngOnInit(): void {
    this.musicasService.getMusics()
      .subscribe(
        as => { this.musics = as; },
        msg => { alert(msg.message); }
      );
  }

}
