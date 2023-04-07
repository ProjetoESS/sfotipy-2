import { Category } from '../../common/category';
import { Playlist } from '../../common/playlist'

export class PlaylistService {
  idCount: number = 0;
  playlists: Playlist[] = [];
  categories: string[] = [];
  playlistEA : Playlist[] = [];
  playlistPB : Playlist[] = [];
  playlistRC : Playlist[] = [];
  playlistMN : Playlist[] = [];

  get() : Playlist[]{
    return this.playlists;
  }

  getEA() : Playlist[] {
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

  getById(playlistId: number): Playlist | undefined {
    return this.playlists.find(({ id }) => id == playlistId);
  }

  add(playlist: Playlist): Playlist {
    const newPlaylist = new Playlist(<Playlist>{ ...playlist, id: this.idCount });
    // if (newMusic.price <= 0) {
    //     throw Error("Price can't equal or less than zero")
    // }
    this.playlists.push(newPlaylist);
    this.idCount++;
    return newPlaylist;
}

  addNewCategory(playlistId: number, category: string): Playlist | null {
    const playlist = this.getById(playlistId);
    if(!playlist)
      return null;
    if (playlist.categories.length > 2) {
      return null;
    }
    playlist.categories.push(category);
    return playlist;
  }

  deleteCategory(playlistId: number, category: Category): Playlist {
    const playlist = this.getById(playlistId);
    if (playlist.categories.includes(category)) {
      playlist.categories.splice(playlistId, 1);
    } else {
      return null;
    }
    return playlist;
  }

  getAllCategories(): string[] {
    return this.categories;
  }
}


