import { Component, Input } from '@angular/core';
import { Music } from '../../../../common/music';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss']
})
export class MusicCardComponent {
  @Input() name!: string;
  @Input() author!: string;

  @Input() id!: number;
  @Input() music!: Music;

}
