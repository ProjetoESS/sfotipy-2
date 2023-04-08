import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Category } from '../../../../common/category';
import { MusicasService } from '../musicas.service';
import { PlaylistService } from '../playlist.service';

import { Music } from './../../../../common/music';
import { Playlist } from './../../../../common/playlist';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-root',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private playlistService: PlaylistService,
    private musicService: MusicasService,
    private categoryService: CategoryService) { }

  showLink: boolean = false;
  playlistId: number = 0;

  categories: Category[] = [];

  // show_followers(id: number) {
  //   const playlist = this.playlists.find(
  //       p => p.id === id);  // Procura a playlist correspondente ao id na
  //       lista
  //                           // de playlists
  //   if (playlist) window.alert(playlist.followers)
  // }

  redirectaddmusic() {
    console.log('musica')
  }

  selectedPlaylist: Playlist = new Playlist(<Playlist>{});

  playlistSongs: Music[] = [];
  showShareLink() {
    this.showLink = !this.showLink;
  }

  playlistCategories: any[] = [];

  getCategories(): Category[] {
    return this.categories.filter(c => !this.playlistCategories.includes(c));
  }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
    this.route.paramMap.subscribe(params => {
      if (params && params.get('id')) {
        const id = params?.get('id');
        if (id) {
          this.playlistService.getPlaylistById(parseInt(id))
            .subscribe(
              as => {
                this.selectedPlaylist = as;
                for (var i in this.selectedPlaylist.musics) {
                  this.musicService.getMusicsById(parseInt(i))
                    .subscribe(
                      as => {
                        this.playlistSongs.push(as);
                      },
                      msg => { alert(msg.message); }
                    );
                }
                this.playlistService.getPlaylistCategories(parseInt(id))
                  .subscribe(
                    ar => { this.playlistCategories = ar },
                    msg => { alert(msg.message) }
                  )
              },
              msg => { alert(msg.message); }
            );

        }
      }
    });
  }

  removeCategory(category: Category): void {
  }

  selectCategory(category: Category): void {
  }
}
