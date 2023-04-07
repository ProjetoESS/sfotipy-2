import { Component } from '@angular/core';
import { PlaylistService } from '../../playlist.service';
import { Category } from '../../../../../common/category';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-criacao-categorias',
  templateUrl: './criacao-categorias.component.html',
  styleUrls: ['./criacao-categorias.component.scss']
})

export class CriacaoCategoriasComponent {

  playlistId : number = 0;
  playlistCategories : Category[] = [];
  allCategories : Category[] = [];

  constructor(private playlistService : PlaylistService, private route: ActivatedRoute, private router: Router) {};

  getPlaylistCategories() {
    this.playlistCategories = this.playlistService.getCategories(this.playlistId);
  }

  getAllCategories() {
    this.allCategories = this.playlistService.getAllCategories()
  }

  addNewCategory(category: Category) {
    this.playlistService.addNewCategory(this.playlistId, category);
  }

  deleteCategory(category: Category) {
    this.playlistService.deleteCategory(this.playlistId, category);
  }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    this.playlistId = id;
  }
  
}
