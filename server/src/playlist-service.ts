import { Category } from '../../common/Category';
import { Playlist } from '../../common/playlist'
import { of, Observable } from 'rxjs';



export class PlaylistService {
  playlists: Playlist[] = [];
  categories: string[] = [];
  idCount: number = 6
  playlistEA: Playlist[] = [];
  playlistPB: Playlist[] = [];
  playlistRC: Playlist[] = [];
  playlistMN: Playlist[] = [];

  addPlaylist(playlist: Playlist): Playlist[] {
    playlist.id = this.idCount;
    this.playlists.push(playlist);
    this.idCount++
    return this.playlists;
  }

  getUserPlaylists(ownerId: any): Playlist[] {
    const playlistsReturn: Playlist[] = []
    for (const playlist of this.playlists) {
      console.log(ownerId, playlist.ownerId)
     if (playlist.ownerId == ownerId) {
      playlistsReturn.push(playlist)
     }
    }
    return playlistsReturn;
  }

  verificarNomePlaylistExistente(nomePlaylist: string): boolean {
    if (this.playlists.length === 0) {
      return false
    } else {
      for (let playlist of this.playlists) {
        if (playlist.name === nomePlaylist) {
          return true;
        }
      }
    }
    
    return false;
  }

  get(): Playlist[] {
    return this.playlists;
  }

  getEA(): Playlist[] {
    return this.playlistEA;
  }

  getPB(): Playlist[] {
    return this.playlistPB;
  }
  
  getRC(): Playlist[] {
    return this.playlistRC;
  }

  getMN(): Playlist[] {
    return this.playlistMN;
  }

  getById(playlistId: number): Playlist {
    return this.playlists.find(({ id }) => id == playlistId);
  }

  addNewCategory(playlistId: number, category: string): Playlist {
    const playlist = this.getById(playlistId);
    if (playlist.categories.length > 2) {
      return null;
    }
    /*playlist.categories.push(category);*/
    return playlist;
  }

  deleteCategory(playlistId: number, category: string): Playlist {
    const playlist = this.getById(playlistId);
    /*if (playlist.categories.includes(category)) {
      playlist.categories.splice(playlistId, 1);
    } else {
      return null;
    }*/
    return playlist;
  }

  getAllCategories(): string[] {
    return this.categories;
  }

}


