import { Component } from '@angular/core';
import { Playlist } from '../../../../common/playlist';
import { PlaylistService } from "../../../../server/src/playlist-service"

@Component({
  selector: 'app-playlist-recomendadas',
  templateUrl: './playlist-recomendadas.component.html',
  styleUrls: ['./playlist-recomendadas.component.scss']
})
export class PlaylistRecomendadasComponent {

  playlists:Playlist[] = []
  teste:Playlist[] = []

  playlistService: PlaylistService = new PlaylistService;

  ngOnInit(): void {

    this.playlists = [{ 
      id: 1, 
      name: 'Playlist 1', 
      categories: ['pop', 'rock'], 
      musics: [
        { id: 1, name: "Song 1", author: "Author 1", image: "image1.jpg", link: "link1.mp3", duration: 180 },
        { id: 2, name: "Song 2", author: "Author 2", image: "image2.jpg", link: "link2.mp3", duration: 240 }
      ], 
      image: 'https://upload.wikimedia.org/wikipedia/en/1/1b/NF_-_The_Search.png',
      link: ""
    },
    { 
      id: 2, 
      name: 'Playlist 2', 
      categories: ['jazz', 'blues'], 
      musics: [
        { id: 1, name: "Song 1", author: "Author 1", image: "image1.jpg", link: "link1.mp3", duration: 180 },
        { id: 2, name: "Song 2", author: "Author 2", image: "image2.jpg", link: "link2.mp3", duration: 240 }
      ], 
      image: 'https://i1.sndcdn.com/artworks-000066040951-b04o57-t500x500.jpg',
      link: ""
    },
    { 
      id: 3, 
      name: 'Playlist 3', 
      categories: ['pop', 'hip hop'], 
      musics: [
        { id: 1, name: "Song 1", author: "Author 1", image: "image1.jpg", link: "link1.mp3", duration: 180 },
        { id: 2, name: "Song 2", author: "Author 2", image: "image2.jpg", link: "link2.mp3", duration: 240 }
      ], 
      image: 'https://i.scdn.co/image/ab67616d0000b273b47d8a9e844189f69d5e58a7',
      link: ""
    },
    { 
      id: 4, 
      name: 'Playlist 4', 
      categories: ['rock', 'metal'], 
      musics: [
        { id: 1, name: "Song 1", author: "Author 1", image: "image1.jpg", link: "link1.mp3", duration: 180 },
        { id: 2, name: "Song 2", author: "Author 2", image: "image2.jpg", link: "link2.mp3", duration: 240 }
      ], 
      image: 'https://cdns-images.dzcdn.net/images/cover/e94c38ba711b8f36ac1b541d0a14aa73/350x350.jpg',
      link: ""
    },
    { 
      id: 5, 
      name: 'Playlist 5', 
      categories: ['pop', 'indie'], 
      musics: [
        { id: 1, name: "Song 1", author: "Author 1", image: "image1.jpg", link: "link1.mp3", duration: 180 },
        { id: 2, name: "Song 2", author: "Author 2", image: "image2.jpg", link: "link2.mp3", duration: 240 }
      ], 
      image: 'https://images.booksense.com/images/090/360/9781632360090.jpg',
      link: ""
    }];
  };
  
  selectedPlaylist: any;

  onPlay(playlist: any) {
    // Stop playing any previously selected playlist
    if (this.selectedPlaylist) {
      this.selectedPlaylist.isPlaying = false;
    }
    if(this.selectedPlaylist == playlist){
      this.selectedPlaylist.isPlaying = false;
    }
    else{
      // Set the new selected playlist and start playing
      this.selectedPlaylist = playlist;
      this.selectedPlaylist.isPlaying = true;
    }
  }
}
