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
      },
      {
        id: 7,
        name: "Música 7",
        artist: 'musico7'
      },
      {
        id: 8,
        name: "Música 8",
        artist: 'musico8'
      },
      {
        id: 9,
        name: "Música 9",
        artist: 'musico9'
      },
      {
        id: 10,
        name: "Música 10",
        artist: 'musico10'
      }
    ]

    categories : any[] = [
      {
        id : 1, name : "pop"
      },
      {
        id : 2, name: "jazz"
      },
      {
        id : 3, name : "indie"
      },
      {
        id : 4, name : "rock"
      }
    ]

    playlists: any[] = [ // Array com informações das playlists
    {
      id: 1,
      name: "Minha playlist",
      categories : ["pop", "jazz"],
      songs: ["Música 1", "Música 2", "Música 3","Música 4", "Música 5", "Música 6", "Música 7", "Música 8", "Música 9", "Música 10"],
      owner: 'dollynt',
      followers: ['angel','luiz','victor']
    },
    {
      id: 2,
      name: "Outra playlist",
      categories : ["indie", "rock"],
      songs: ["Música 4", "Música 5", "Música 6", "Música 2"],
      owner: 'dollyntt',
      followers: ['angel','luiz','matheus']
    }
    ];

    show_followers(id: number) {
      const playlist = this.playlists.find(p => p.id === id); // Procura a playlist correspondente ao id na lista de playlists
      window.alert(playlist.followers)
    }

    redirectaddmusic() {
      console.log('musica')
    }

    selectedPlaylist: any; // Propriedade que receberá a playlist selecionada
    playlistSongs: any[] = [];
    playlistCategories : any[] = [];

    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        if(params && params.get('id')) {
          const id = params?.get('id');// Obtém o valor do parâmetro id da rota e converte para número
          this.selectedPlaylist = this.playlists.find(playlist => playlist.id == id); // Procura a playlist correspondente ao id na lista de playlists
          this.playlistSongs = this.songs.filter(song => this.selectedPlaylist.songs.includes(song.name));
          this.playlistCategories = this.categories.filter(cat => this.selectedPlaylist.categories.includes(cat.name));
        }
      });
    }
}
