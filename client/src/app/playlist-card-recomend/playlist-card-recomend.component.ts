import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Playlist } from '../../../../common/playlist';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-playlist-card-recomend',
  templateUrl: './playlist-card-recomend.component.html',
  styleUrls: ['./playlist-card-recomend.component.scss']
})
export class PlaylistCardRecomendComponent {

  constructor(private clipboard: Clipboard) {};

  @Input() playlist: any;

  @Output() play = new EventEmitter<any>();

  openPlaylistOnClick(event: Event, playlist: Playlist) {
    const url:string = `http://localhost:4200/playlist/${playlist.id}`;
    window.open(url, "_blank");
  }

  startPlayingOnClick(event: Event){
    event.stopPropagation();
    this.play.emit(this.playlist);
  }

  likePlaylist(event: Event) {
    event.stopPropagation();
  }

  sharePlaylist(event: Event, playlist: Playlist) {
    event.stopPropagation();
    var str: string = "localhost:4200/playlist/" + playlist.id;
    this.clipboard.copy(str);
  }

  savePlaylist(event: Event) {
    event.stopPropagation();
  }

  executeAction(event: Event) {
    event.stopPropagation();
  }
}
