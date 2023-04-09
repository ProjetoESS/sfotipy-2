import { Component } from '@angular/core';
import { Music } from '../../../../common/music';
import { MusicService } from '../../../../server/src/music-service';

@Component({
  selector: 'app-artistas-em-alta',
  templateUrl: './artistas-em-alta.component.html',
  styleUrls: ['./artistas-em-alta.component.scss']
})
export class ArtistasEmAltaComponent {
  mostAccessedArtists: Music[] = [];
  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.mostAccessedArtists = this.musicService.getMostAccessed();

  }

  getFirstArtistImage(): string {
    return this.mostAccessedArtists[0].image;
  }
  getSecondArtistImage(): string {
    return this.mostAccessedArtists[1].image;
  }
  getThirdArtistImage(): string {
    return this.mostAccessedArtists[2].image
  }
  getFourthArtistImage(): string {
    return this.mostAccessedArtists[3].image;
  }
  getFifthArtistImage(): string {
    return this.mostAccessedArtists[4].image;
  }
  getsixthArtistImage(): string {
    return this.mostAccessedArtists[5].image;
  }

}
