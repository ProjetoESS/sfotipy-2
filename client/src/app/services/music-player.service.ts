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

  updateInterval: any;

  constructor() {
    this.updateInterval = setInterval(() => {
      this.updateMusicInfo();
    }, 1000);
  }

  updateMusicInfo() {
    this.currentTime = { 'minutes': Math.floor(this.audio.currentTime / 60), 'seconds': Math.floor(this.audio.currentTime - Math.floor(this.audio.currentTime / 60) * 60) }
    this.musicTime = { 'minutes': Math.floor(this.audio.duration / 60), 'seconds': Math.floor(this.audio.duration - Math.floor(this.audio.duration / 60) * 60) }
    this.getCurrentProgress();
  }

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

  getCurrentProgress(): number {
    return this.audio.currentTime / this.audio.duration * 100;
  }

  getCurrentMusic(): Music {
    return this.currentMusic;
  }

  getCurrentState(): boolean {
    return this.isPlaying;
  }
}
