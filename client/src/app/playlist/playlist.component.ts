import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistModule } from "./playlists.module";
import { Music } from "./../../../../common/music";
import { Playlist } from "./../../../../common/playlist";

@Component({
  selector: 'app-root',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  musics: any[] = [
    {
      id: 1,
      name: "Música 1",
      author: 'musico1',
      image: '',
      link: '',
      duration: 0
    },
    {
      id: 2,
      name: "Música 2",
      author: 'musico2',
      image: '',
      link: '',
      duration: 0
    },
    {
      id: 3,
      name: "Música 3",
      author: 'musico3',
      image: '',
      link: '',
      duration: 0
    },
    {
      id: 4,
      name: "Música 4",
      author: 'musico4',
      image: '',
      link: '',
      duration: 0
    },
    {
      id: 5,
      name: "Música 5",
      author: 'musico5',
      image: '',
      link: '',
      duration: 0
    },
    {
      id: 6,
      name: "Música 6",
      author: 'musico6',
      image: '',
      link: '',
      duration: 0
    },
    {
      id: 7,
      name: "Música 7",
      author: 'musico7',
      image: '',
      link: '',
      duration: 0
    },
    {
      id: 8,
      name: "Música 8",
      author: 'musico8',
      image: '',
      link: '',
      duration: 0
    },
    {
      id: 9,
      name: "Música 9",
      author: 'musico9',
      image: '',
      link: '',
      duration: 0
    },
    {
      id: 10,
      name: "Música 10",
      author: 'musico10',
      image: '',
      link: '',
      duration: 0
    }
  ];

  categories: any[] = [
    {
      id: 1, name: "pop"
    },
    {
      id: 2, name: "jazz"
    },
    {
      id: 3, name: "indie"
    },
    {
      id: 4, name: "rock"
    }
  ]

  playlists: any[] = [ // Array com informações das playlists
    {
      id: 1,
      name: "Minha playlist",
      categories: ["pop", "jazz"],
      availability: "public",
      songs: ["Música 1", "Música 2", "Música 3", "Música 4", "Música 5", "Música 6", "Música 7", "Música 8", "Música 9", "Música 10"],
      owner: 'dollynt',
      image: "",
      link: "",
      followers: ['angel', 'luiz', 'victor']
    },
    {
      id: 2,
      name: "Outra playlist",
      musics: [this.musics[4], this.musics[5], this.musics[6], this.musics[2]],
      availability: "private",
      categories: ["indie", "rock"],
      songs: ["Música 4", "Música 5", "Música 6", "Música 2"],
      owner: 'dollyntt',
      followers: ['angel', 'luiz', 'matheus'],
      image: "",
      link: "",
    },
    {
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
    }
  ];

  showLink: boolean = false;

  show_followers(id: number) {
    const playlist = this.playlists.find(p => p.id === id); // Procura a playlist correspondente ao id na lista de playlists
    if (playlist)
      window.alert(playlist.followers)
  }

  redirectaddmusic() {
    console.log('musica')
  }

  selectedPlaylist: Playlist = new Playlist({
    id: -1,
    name: "",
    categories: [],
    musics: [],
    image: "",
    link: "",
    owner: "",
    followers: []
  });

  playlistSongs: Music[] = [];
  showShareLink() {
    this.showLink = !this.showLink;
  }

  playlistCategories: any[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params && params.get('id')) {
        const id = params?.get('id');// Obtém o valor do parâmetro id da rota e converte para número
        if (id) {
          const foundPlaylist = this.playlists.find(playlist => playlist.id == parseInt(id));
          if (foundPlaylist)
            this.selectedPlaylist = foundPlaylist; // Procura a playlist correspondente ao id na lista de playlists
          this.playlistSongs = this.musics.filter(music => this.selectedPlaylist.musics.includes(music));
        }
        this.selectedPlaylist = this.playlists.find(playlist => playlist.id == id); // Procura a playlist correspondente ao id na lista de playlists
        this.playlistSongs = this.musics.filter(song => this.selectedPlaylist.musics.includes(song));
        this.playlistCategories = this.categories.filter(cat => this.selectedPlaylist.categories.includes(cat.name));
      }
    });
  }
}
