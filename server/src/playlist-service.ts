import {Category} from '../../common/category';
import {Playlist} from '../../common/playlist'

export class PlaylistService {
  playlists: Playlist[] = [];
  idCount: number = 10;
  categories: Category[] = [];

  add(playlist: Playlist): Playlist {
    const newPlaylist = new Playlist(<Playlist>{ ...playlist, id: this.idCount });
    this.playlists.push(newPlaylist);
    this.idCount++;
    return newPlaylist;
  }

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

  getById(playlistId: number): Playlist|undefined {
    return this.playlists.find(({id}) => id == playlistId);
  }


  update(playlist: Playlist): Playlist | null {
    const result = this.playlists.find(c => c.id == playlist.id);
    if (result instanceof Playlist) {
      result.update(<Playlist>playlist);
      return result;
    } else {
      return null;
    }
  }

  delete(id: number): boolean {
    const index = this.playlists.findIndex(c => c.id === id);
    if (index >= 0) {
      this.playlists.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  addNewCategory(playlistId: number, category: number): Playlist|null {
    const playlist = this.getById(playlistId);
    if (!playlist) return null;
    if (playlist.categories.length > 2) {
      return null;
    }
    playlist.categories.push(category);
    return playlist;
  }

  deleteCategory(playlistId: number, category: number): Playlist|null {
    const playlist = this.getById(playlistId);
    if (playlist?.categories.includes(category)) {
      playlist?.categories.splice(playlistId, 1);
    } else {
      return null;
    }
    return playlist;
  }
}
