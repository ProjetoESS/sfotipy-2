import { Component } from '@angular/core';
import {MusicService} from '../../../../server/src/music-service';
import { Music } from '../../../../common/music';
@Component({
  selector: 'app-musicas-em-alta',
  templateUrl: './musicas-em-alta.component.html',
  styleUrls: ['./musicas-em-alta.component.scss']
})
export class MusicasEmAltaComponent {
  mostAccessedMusics: Music[] = [];

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.mostAccessedMusics = this.musicService.getMostAccessed();
  }
}
