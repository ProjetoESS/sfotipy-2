import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Playlist } from '../../../../common/playlist';
import { Router } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-playlist-card-recomend',
  templateUrl: './playlist-card-recomend.component.html',
  styleUrls: ['./playlist-card-recomend.component.scss']
})
export class PlaylistCardRecomendComponent {
  //constructor(private router: Router) {};
  constructor(private clipboard: Clipboard, private router: Router) {};

  @Input() playlist: any;

  @Output() play = new EventEmitter<any>();

  openPlaylistOnClick(event: Event, playlist: Playlist) {
    this.router.navigate(['/playlist/', playlist.id])
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
    const str: string = "localhost:4200/playlist/" + playlist.id;
    this.clipboard.copy(str);
  }

  savePlaylist(event: Event) {
    event.stopPropagation();
  }

  executeAction(event: Event) {
    event.stopPropagation();
  }
}
