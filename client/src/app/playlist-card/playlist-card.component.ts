import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss']
})
export class PlaylistCardComponent {
  @Input() playlist: any;

  @Output() play = new EventEmitter<any>();

  openPlaylistOnClick(url: string) {
    window.open(url, "_blank");
  }

  startPlayingOnClick(event: Event){
    event.stopPropagation();
    this.play.emit(this.playlist);
  }

  likePlaylist(event: Event) {
    event.stopPropagation();
  }

  travelPlaylist(event: Event) {
    event.stopPropagation();
  }

  confirm(event: Event) {
    event.stopPropagation();
  }

  executeAction(event: Event) {
    event.stopPropagation();
  }
}
