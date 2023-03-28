import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss']
})
export class PlaylistCardComponent {
  @Input() playlist: any;
  @Input() isPlaying: boolean = false;

  openPlaylistOnClick(url: string) {
    window.open(url, "_blank");
  }

  startPlayingOnClick(event: Event){
    event.stopPropagation();
    this.isPlaying = !this.isPlaying;
  }

  executeAction(event: Event) {
    event.stopPropagation();
  }
}
