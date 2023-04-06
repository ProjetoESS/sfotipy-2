import { Category } from '../../common/Category';
import { Playlist } from '../../common/playlist'



export class PlaylistService {
  playlists: Playlist[] = [];
  categories: string[] = [];
  idCount: number = 0
  playlistEA: Playlist[] = [];
  playlistPB: Playlist[] = [];
  playlistRC: Playlist[] = [];
  playlistMN: Playlist[] = [];

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


  addPlaylist(playlist: Playlist): Playlist{
    const newPlaylist = new Playlist(playlist)
    this.playlists.push(newPlaylist);
    return newPlaylist;
  
  }

  getUserPlaylists(ownerId: number): Playlist[] {
    return this.playlists.filter(playlist => playlist.ownerId == ownerId);
  }

}


