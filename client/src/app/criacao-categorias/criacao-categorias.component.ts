import { Component } from '@angular/core';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-criacao-categorias',
  templateUrl: './criacao-categorias.component.html',
  styleUrls: ['./criacao-categorias.component.scss']
})

export class CriacaoCategoriasComponent {

  playlistId : number = 0;
  playlistCategories : string[] = [];
  allCategories : string[] = [];

  constructor(private playlistService : PlaylistService) {};

  getPlaylistCategories() {
    this.playlistCategories = this.playlistService.getCategories(this.playlistId);
  }

  getAllCategories() {
    this.allCategories = this.playlistService.getAllCategories()
  }

  addNewCategory(category: string) {
    this.playlistService.addNewCategory(this.playlistId, category);
  }

  deleteCategory(category: string) {
    this.playlistService.deleteCategory(this.playlistId, category);
  }
  
}
