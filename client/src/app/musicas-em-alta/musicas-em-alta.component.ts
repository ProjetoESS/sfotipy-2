import { Component } from '@angular/core';
import { MusicService } from '../../../../server/src/music-service';
import { Music } from '../../../../common/music';

@Component({
  selector: 'app-musicas-em-alta',
  templateUrl: './musicas-em-alta.component.html',
  styleUrls: ['./musicas-em-alta.component.scss']
})
export class MusicasEmAltaComponent {
  mostAccessedMusics: Music[] = [];
  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.mostAccessedMusics = this.musicService.getMostAccessed();
  }

  getFirstMostAccessedMusicName(): string {
    return this.mostAccessedMusics[0].name
  }
  getSecondMostAccessedMusicName(): string {
    return this.mostAccessedMusics[1].name
  }
  getThirdMostAccessedMusicName(): string {
    return this.mostAccessedMusics[2].name
  }
  getFourthMostAccessedMusicName(): string {
    return this.mostAccessedMusics[3].name
  }
  getFifthMostAccessedMusicName(): string {
    return this.mostAccessedMusics[4].name
  }
  getSixthMostAccessedMusicName(): string {
    return this.mostAccessedMusics[5].name
  }
  getSeventhMostAccessedMusicName(): string {
    return this.mostAccessedMusics[6].name
  }
  getEighthMostAccessedMusicName(): string {
    return this.mostAccessedMusics[7].name
  }
  getFirstMostAccessedMusicAuthor(): string {
    return this.mostAccessedMusics[0].author
  }
  getSecondMostAccessedMusicAuthor(): string {
    return this.mostAccessedMusics[1].author
  }
  getThirdMostAccessedMusicAuthor(): string {
    return this.mostAccessedMusics[2].author
  }
  getFourthMostAccessedMusicAuthor(): string {
    return this.mostAccessedMusics[3].author
  }
  getFifthMostAccessedMusicAuthor(): string {
    return this.mostAccessedMusics[4].author
  }
  getSixthMostAccessedMusicAuthor(): string {
    return this.mostAccessedMusics[5].author
  }
  getSeventhMostAccessedMusicAuthor(): string {
    return this.mostAccessedMusics[6].author
  }
  getEighthMostAccessedMusicAuthor(): string {
    return this.mostAccessedMusics[7].author
  }
  getFirstMostAccessedMusicImage(): string {
    return this.mostAccessedMusics[0].image
  }
  getSecondMostAccessedMusicImage(): string {
    return this.mostAccessedMusics[1].image
  }
  getThirdMostAccessedMusicImage(): string {
    return this.mostAccessedMusics[2].image
  }
  getFourthMostAccessedMusicImage(): string {
    return this.mostAccessedMusics[3].image
  }
  getFifthMostAccessedMusicImage(): string {
    return this.mostAccessedMusics[4].image
  }
  getSixthMostAccessedMusicImage(): string {
    return this.mostAccessedMusics[5].image
  }
  getSeventhMostAccessedMusicImage(): string {
    return this.mostAccessedMusics[6].image
  }
  getEighthMostAccessedMusicImage(): string {
    return this.mostAccessedMusics[7].image
  }
}
