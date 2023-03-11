import { Component } from '@angular/core';

@Component({
  selector: 'app-playlist-recomendadas',
  templateUrl: './playlist-recomendadas.component.html',
  styleUrls: ['./playlist-recomendadas.component.scss']
})

export class PlaylistRecomendadasComponent {
  playlists = [  
    { name: "Playlist 1", image: "https://upload.wikimedia.org/wikipedia/en/1/1b/NF_-_The_Search.png", link: "https://www.youtube.com/watch?v=0YKOxtOb44c"},
    { name: "Playlist 2", image: "https://i1.sndcdn.com/artworks-000066040951-b04o57-t500x500.jpg", link: "https://www.youtube.com/watch?v=kXYiU_JCYtU"},  
    { name: "Playlist 3", image: "https://i.scdn.co/image/ab67616d0000b273b47d8a9e844189f69d5e58a7", link: "https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen"},
    { name: "Playlist 4", image: "https://cdns-images.dzcdn.net/images/cover/e94c38ba711b8f36ac1b541d0a14aa73/350x350.jpg", link: "https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan"},  
    { name: "Playlist 5", image: "https://images.booksense.com/images/090/360/9781632360090.jpg", link: "https://www.netflix.com/title/81249833"}
  ];

  isPlaying:boolean = false;

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
