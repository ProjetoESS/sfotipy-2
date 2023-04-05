import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
    constructor(private route: ActivatedRoute) {}

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

    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        if(params && params.get('id')) {
          const id = params?.get('id');// Obtém o valor do parâmetro id da rota e converte para número
          this.selectedPlaylist = this.playlists.find(playlist => playlist.id == id); // Procura a playlist correspondente ao id na lista de playlists
        }
      });
    }
}
