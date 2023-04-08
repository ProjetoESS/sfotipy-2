import {Category} from '../../common/category';
import {Playlist} from '../../common/playlist'

export class PlaylistService {
  
  playlists: Playlist[] = [
    <Playlist>{
      "id" : 0,
      "name": "Minha playlist",
      "categories": [1],
      "musics": [],
      "image": "https://upload.wikimedia.org/wikipedia/en/1/1b/NF_-_The_Search.png",
      "link": "",
      "owner": "",
      "followers": [],
      "availability": "public"
    },
    <Playlist>{
      "id" : 1,
      "name" : "Outra playlist",
      "categories" : [0],
      "musics" : [1, 2],
      "image" : "https://upload.wikimedia.org/wikipedia/en/1/1b/NF_-_The_Search.png",
      "link" : "",
      "owner" : "",
      "followers" : [],
      "availability" : "private"
    }
  ];
  idCount: number = 0;
  categories: Category[] = [];

  get(): Playlist[] {
    return this.playlists;
  }

  getById(playlistId: number): Playlist|undefined {
    return this.playlists.find(({id}) => id == playlistId);
  }

  add(playlist: Playlist): Playlist {
    const newPlaylist = new Playlist(<Playlist>{...playlist, id: this.idCount});
    this.playlists.push(newPlaylist);
    this.idCount++;
    return newPlaylist;
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
    if (playlist.categories.length >= 2) {
      return null;
    }
    playlist.categories.push(category);
    return playlist;
  }

  deleteCategory(playlistId: number, category: number): Playlist|null {
    const playlist = this.getById(playlistId);
    if (playlist?.categories.includes(category)) {
      // playlist.categories.splice
      var idx = playlist.categories.findIndex(ar => ar == category);
      if(idx != -1) {
        playlist.categories.splice(idx, 1);
      }
      // playlist?.categories.splice(playlistId, 1);
    } else {
      return null;
    }
    return playlist;
  }

}
