import { Component } from '@angular/core';
import { MusicPlayerService } from '../services/music-player.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private musicPlayerService: MusicPlayerService) { }

  getMusicTime() {
    return this.musicPlayerService.getCurrentMusicTime();
  }

  getCurrentTime() {
    return this.musicPlayerService.getCurrentTime();
  }
}
