import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserPlaylistsModule } from './user_playlists.module';

@Component({
  selector: 'app-root',
  templateUrl: './user_playlists.component.html',
  styleUrls: ['./user_playlists.component.css']
})

export class UserPlaylistsComponent implements OnInit {
  successMessage: string = '';

    constructor(private router: Router, private route: ActivatedRoute) {}

    numPlaylists: number = 2; // Número de playlists cadastradas
    playlists: any[] = [ // Array com informações das playlists
    {
      id: 1,
      ownerId: 1,
      name: "Minha playlist",
      songs: ["Música 1", "Música 2", "Música 3"]
    },
    {
      id: 2,
      ownerId: 2,
      name: "Outra playlist",
      songs: ["Música 4", "Música 5", "Música 6"]
    }

  ];

    redirectplaylist(id: number) {
      this.router.navigate(['/playlist/', id])
    }

    redirecionarParaCriarPlaylist() {
      this.router.navigate(['/criar_playlist']);
    }

    ngOnInit(): void {
      this.successMessage = this.route.snapshot.data['successMessage'];
    }
}
