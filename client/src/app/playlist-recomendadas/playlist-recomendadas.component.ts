import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Playlist } from '../../../../common/playlist';
import { Music } from '../../../../common/music';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from "../../../../server/src/playlist-service"

@Component({
  selector: 'app-playlist-recomendadas',
  templateUrl: './playlist-recomendadas.component.html',
  styleUrls: ['./playlist-recomendadas.component.scss']
})
export class PlaylistRecomendadasComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  musics: Music[] = [<Music>{
    id: 1,
    name: "Música 1",
    author: 'musico1',
    image: "",
    link: "",
    duration: 0
  },
  <Music>{
    id: 2,
    name: "Música 2",
    author: 'musico2',
    image: "",
    link: "",
    duration: 0
  },
  <Music>{
    id: 3,
    name: "Música 3",
    author: 'musico3',
    image: "",
    link: "",
    duration: 0
  },
  <Music>{
    id: 4,
    name: "Música 4",
    author: 'musico4',
    image: "",
    link: "",
    duration: 0
  },
  <Music>{
    id: 5,
    name: "Música 5",
    author: 'musico5',
    image: "",
    link: "",
    duration: 0
  },
  <Music>{
    id: 6,
    name: "Música 6",
    author: 'musico6',
    image: "",
    link: "",
    duration: 0
  },
  <Music>{
    id: 7,
    name: "Música 7",
    author: 'musico7',
    image: "",
    link: "",
    duration: 0
  },
  <Music>{
    id: 8,
    name: "Música 8",
    author: 'musico8',
    image: "",
    link: "",
    duration: 0
  },
  <Music>{
    id: 9,
    name: "Música 9",
    author: 'musico9',
    image: "",
    link: "",
    duration: 0
  },
  <Music>{
    id: 10,
    name: "Música 10",
    author: 'musico10',
    image: "",
    link: "",
    duration: 0
  }];

  playlists: Playlist[] = []

  playlistService: PlaylistService = new PlaylistService;

  ngOnInit(): void {
  };

  selectedPlaylist: any;

  onPlay(playlist: any) {
    // Stop playing any previously selected playlist
    if (this.selectedPlaylist) {
      this.selectedPlaylist.isPlaying = false;
    }
    if (this.selectedPlaylist == playlist) {
      this.selectedPlaylist.isPlaying = false;
    }
    else {
      // Set the new selected playlist and start playing
      this.selectedPlaylist = playlist;
      this.selectedPlaylist.isPlaying = true;
    }
  }
}
