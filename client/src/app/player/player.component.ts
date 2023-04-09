import { Component } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  isPlaying = false;

  startPlaying(): void {
    console.log('startPlaying');
    this.isPlaying = true;
  }

  stopPlaying = () => {
    this.isPlaying = false;
  }
}
