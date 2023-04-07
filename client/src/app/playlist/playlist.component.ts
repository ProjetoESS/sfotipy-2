import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Category} from '../../../../common/category';
import {MusicasService} from '../musicas.service';
import {PlaylistService} from '../playlist.service';

import {Music} from './../../../../common/music';
import {Playlist} from './../../../../common/playlist';
import {PlaylistModule} from './playlists.module';

@Component({
  selector: 'app-root',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  constructor(
      private route: ActivatedRoute, private playlistService: PlaylistService,
      private musicService: MusicasService) {}

  showLink: boolean = false;
  playlistId: number = 0;

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

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params && params.get('id')) {
        const id = params?.get('id');
        if (id) {
          this.playlistService.getPlaylistById(parseInt(id))
          .subscribe(
            as => { this.selectedPlaylist = as;
              for (var i in this.selectedPlaylist.musics) {
                this.musicService.getMusicsById(parseInt(id))
              .subscribe(
                as => { this.playlistSongs.push(as), console.log(this.playlistSongs)},
                msg => { alert(msg.message); }
              );
              } },
            msg => { alert(msg.message); }
          );
          this.playlistService.getPlaylistCategories(parseInt(id))
          .subscribe(
            ar => {this.playlistCategories = ar},
            msg => {alert(msg.message)}
          )
        }
      }
    });
  }
}
