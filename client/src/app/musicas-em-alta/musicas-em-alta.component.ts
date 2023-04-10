import { Component } from '@angular/core';
import { Music } from '../../../../common/music';
import { MusicasService } from '../musicas.service';
@Component({
  selector: 'app-musicas-em-alta',
  templateUrl: './musicas-em-alta.component.html',
  styleUrls: ['./musicas-em-alta.component.scss']
})
export class MusicasEmAltaComponent {
  mostAccessedSongs: Music[]= [];

  constructor(private musicasService: MusicasService) { }
  ngOnInit() {
    this.musicasService.getMusics().subscribe(as => {
      this.mostAccessedSongs = as
      this.mostAccessedSongs.sort((a, b) => b.accessSong - a.accessSong).slice(0, 8)
    });
  }
  getFirstSongTitle(): string {
    return this.mostAccessedSongs[0].name;
  }
  getSecondSongTitle(): string {
    return this.mostAccessedSongs[1].name;
  }
  getThirdSongTitle(): string {
    return this.mostAccessedSongs[2].name;
  }
  getFourthSongTitle(): string {
    return this.mostAccessedSongs[3].name;
  }
  getFifthSongTitle(): string {
    return this.mostAccessedSongs[4].name;
  }
  getSixthSongTitle(): string {
    return this.mostAccessedSongs[5].name;
  }
  getSeventhSongTitle(): string {
    return this.mostAccessedSongs[6].name;
  }
  getEighthSongTitle(): string {
    return this.mostAccessedSongs[7].name;
  }
  getFirstSongImage(): string {
    return this.mostAccessedSongs[0].image;
  }
  getSecondSongImage(): string {
    return this.mostAccessedSongs[1].image;
  }
  getThirdSongImage(): string {
    return this.mostAccessedSongs[2].image;
  }
  getFourthSongImage(): string {
    return this.mostAccessedSongs[3].image;
  }
  getFifthSongImage(): string {
    return this.mostAccessedSongs[4].image;
  }
  getSixthSongImage(): string {
    return this.mostAccessedSongs[5].image;
  }
  getSeventhSongImage(): string {
    return this.mostAccessedSongs[6].image;
  }
  getEighthSongImage(): string {
    return this.mostAccessedSongs[7].image;
  }
  getFirstSongAuthor(): string {
    return this.mostAccessedSongs[0].author;
  }
  getSecondSongAuthor(): string {
    return this.mostAccessedSongs[1].author;
  }
  getThirdSongAuthor(): string {
    return this.mostAccessedSongs[2].author;
  }
  getFourthSongAuthor(): string {
    return this.mostAccessedSongs[3].author;
  }
  getFifthSongAuthor(): string {
    return this.mostAccessedSongs[4].author;
  }
  getSixthSongAuthor(): string {
    return this.mostAccessedSongs[5].author;
  }
  getSeventhSongAuthor(): string {
    return this.mostAccessedSongs[6].author;
  }
  getEighthSongAuthor(): string {
    return this.mostAccessedSongs[7].author;
  }

}
