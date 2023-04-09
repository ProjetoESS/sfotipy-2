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

    // const newList: Music[] = [];

    // for (let i = 0; i < this.mostAccessedArtists.length; i++) {
    //   newList.push(this.mostAccessedArtists[i]);
    // }

  }
}
