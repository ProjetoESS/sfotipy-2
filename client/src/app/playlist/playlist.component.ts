import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistModule } from "./playlists.module";

@Component({
  selector: 'app-root',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
    constructor(private route: ActivatedRoute) {}

    songs: any[] = [
      {
        id: 1,
        name: "Música 1",
        artist: 'musico1'
      },
      {
        id: 2,
        name: "Música 2",
        artist: 'musico2'
      },
      {
        id: 3,
        name: "Música 3",
        artist: 'musico3'
      },
      {
        id: 4,
        name: "Música 4",
        artist: 'musico4'
      },
      {
        id: 5,
        name: "Música 5",
        artist: 'musico5'
      },
      {
        id: 6,
        name: "Música 6",
        artist: 'musico6'
      }
    ]

    playlists: any[] = [ // Array com informações das playlists
    {
      id: 1,
      name: "Minha playlist",
      songs: ["Música 1", "Música 2", "Música 3"],
      owner: 'dollynt',
      followers: ['angel','luiz','victor']
    },
    {
      id: 2,
      name: "Outra playlist",
      songs: ["Música 4", "Música 5", "Música 6"],
      owner: 'dollyntt',
      followers: ['angel','luiz','matheus']
    }
    ];

    show_followers(id: number) {
      const playlist = this.playlists.find(p => p.id === id); // Procura a playlist correspondente ao id na lista de playlists
      window.alert(playlist.followers)
    }

    selectedPlaylist: any; // Propriedade que receberá a playlist selecionada
    playlistSongs: any[] = [];

    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        if(params && params.get('id')) {
          const id = params?.get('id');// Obtém o valor do parâmetro id da rota e converte para número
          this.selectedPlaylist = this.playlists.find(playlist => playlist.id == id); // Procura a playlist correspondente ao id na lista de playlists
          this.playlistSongs = this.songs.filter(song => this.selectedPlaylist.songs.includes(song.name));
        }
      });
    }
}
