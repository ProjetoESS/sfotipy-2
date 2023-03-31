import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playlist-card-recomend',
  templateUrl: './playlist-card-recomend.component.html',
  styleUrls: ['./playlist-card-recomend.component.scss']
})
export class PlaylistCardRecomendComponent {
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

  sharePlaylist(event: Event) {
    event.stopPropagation();
  }

  savePlaylist(event: Event) {
    event.stopPropagation();
  }

  executeAction(event: Event) {
    event.stopPropagation();
  }
}
