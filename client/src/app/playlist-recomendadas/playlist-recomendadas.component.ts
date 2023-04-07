import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Playlist } from '../../../../common/playlist';
import { Music } from '../../../../common/music';
import { PlaylistService } from "../../../../server/src/playlist-service"
import { PlaylistComponent } from "./../playlist/playlist.component"
@Component({
  selector: 'app-playlist-recomendadas',
  templateUrl: './playlist-recomendadas.component.html',
  styleUrls: ['./playlist-recomendadas.component.scss']
})
export class PlaylistRecomendadasComponent implements OnInit {

  //constructor(private playlistComponent: PlaylistComponent) {}

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

  //playlists:Playlist[] = this.playlistComponent.playlists;
  playlists:Playlist[] = [{ 
    id: 30, 
    name: 'Mix', 
    categories: ['pop', 'rock'], 
    musics: [
      this.musics[0], this.musics[1]
    ], 
    image: 'https://upload.wikimedia.org/wikipedia/en/1/1b/NF_-_The_Search.png',
    link: "",
    owner: "",
    followers: []
  },
  { 
    id: 31, 
    name: 'Melhores Pop', 
    categories: ['jazz', 'blues'], 
    musics: [
      this.musics[1], this.musics[2]
    ],  
    image: 'https://i1.sndcdn.com/artworks-000066040951-b04o57-t500x500.jpg',
    link: "",
    owner: "",
    followers: []
  },
  { 
    id: 32, 
    name: 'Melhores Rock', 
    categories: ['pop', 'hip hop'], 
    musics: [
      this.musics[2], this.musics[3], this.musics[5]
    ],
    image: 'https://i.scdn.co/image/ab67616d0000b273b47d8a9e844189f69d5e58a7',
    link: "",
    owner: "",
    followers: []
  },
  { 
    id: 33, 
    name: 'Indie', 
    categories: ['rock', 'metal'], 
    musics: [
      this.musics[2], this.musics[3], this.musics[5]
    ],
    image: 'https://cdns-images.dzcdn.net/images/cover/e94c38ba711b8f36ac1b541d0a14aa73/350x350.jpg',
    link: "",
    owner: "",
    followers: []
  },
  { 
    id: 34, 
    name: 'Eletrônica', 
    categories: ['pop', 'indie'], 
    musics: [
      this.musics[2], this.musics[3], this.musics[5]
    ],
    image: 'https://images.booksense.com/images/090/360/9781632360090.jpg',
    link: "",
    owner: "",
    followers: []
  },
  { 
    id: 35, 
    name: 'Para você', 
    categories: ['pop', 'indie'], 
    musics: [
      this.musics[2], this.musics[3], this.musics[5]
    ],
    image: 'https://images.booksense.com/images/090/360/9781632360090.jpg',
    link: "",
    owner: "",
    followers: []
  },
  { 
    id: 36, 
    name: 'Para dormir', 
    categories: ['pop', 'indie'], 
    musics: [
      this.musics[2], this.musics[3], this.musics[5]
    ],
    image: 'https://images.booksense.com/images/090/360/9781632360090.jpg',
    link: "",
    owner: "",
    followers: []
  }]

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
