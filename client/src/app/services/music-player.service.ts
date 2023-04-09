import { Injectable } from '@angular/core';
import { Music } from '../../../../common/music';

@Injectable({
  providedIn: 'root'
})
export class MusicPlayerService {

  currentMusic: Music = new Music(<Music>{ 'id': 0, 'name': "Hymn for the Weekend", 'author': "Coldplay", 'image': "https://upload.wikimedia.org/wikipedia/pt/6/61/Coldplay_Hymn_for_the_Weekend.jpg", 'link': "", 'duration': 500, 'category': 3 });

  audio: HTMLAudioElement = new Audio('assets/musics/' + this.currentMusic.id + '/audio.mp3');

  isPlaying: boolean = false;

  musicTime = { 'minutes': Math.floor(this.currentMusic.duration / 60), 'seconds': this.currentMusic.duration - Math.floor(this.currentMusic.duration / 60) * 60 }

  currentTime = { 'minutes': 0, 'seconds': 0 }

  constructor() { }

  playMusic(music: Music) { }

  play() {
    this.audio.play();
    this.isPlaying = true;
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
  }

  getCurrentTime(): string {
    return this.currentTime.minutes + ":" + this.currentTime.seconds;
  }

  getCurrentMusicTime(): string {
    return this.musicTime.minutes + ":" + this.musicTime.seconds;
  }

  getCurrentMusic(): Music {
    return this.currentMusic;
  }

  getCurrentState(): boolean {
    return this.isPlaying;
  }
}
