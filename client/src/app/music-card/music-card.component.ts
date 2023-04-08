import { Component, Input } from '@angular/core';
import { Music } from '../../../../common/music';
import { CategoryService } from '../category.service';

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

  category: string;

  constructor(private categoryService: CategoryService) {
    this.category = "";
  }

  ngOnInit() {
    this.category = this.categoryService.getCategorybyId(this.music.category)?.name || "";
  }
}
