import { Category } from '../../common/category';
import { Playlist } from '../../common/playlist'

export class PlaylistService {

  playlists: Playlist[] = [
    new Playlist(<Playlist>{
      "id": 0,
      "name": "Mix de Coldplay",
      "categories": [],
      "musics": [0, 1, 2, 3, 4, 5, 6, 7, 8],
      "image": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2f679c136425765.61f96b4f03c85.jpg",
      "link": "",
      "owner": "",
      "followers": [],
      "availability": "public"
    }),
    new Playlist(<Playlist>{
      'id': 1,
      'name': 'Melhores Pop',
      'categories': [1],
      'musics': [0, 1],
      'image':
          'https://cdn.ibispaint.com/movie/190/771/190771621/image190771621l.png',
      'link': '',
      'owner': 'sfotipy',
      'followers': [],
      'availability': 'public'
    }),
    new Playlist(<Playlist>{
      'id': 2,
      'name': 'Melhores Indie',
      'categories': [6],
      'musics': [1, 2],
      'image':
          'https://i.pinimg.com/originals/5c/0b/34/5c0b34be1d361293b0bd2eb124967cd9.png',
      'link': '',
      'owner': 'sfotipy',
      'followers': [],
      'availability': 'public'
    }),
    new Playlist(<Playlist>{
      'id': 3,
      'name': 'Para Você',
      'categories': [1, 2],
      'musics': [0, 1, 2],
      'image':
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVzSe2QANTVbnbNBQX3qMXejQHPLRBtAMDgA&usqp=CAU',
      'link': '',
      'owner': 'sfotipy',
      'followers': [],
      'availability': 'public'
    }),
    new Playlist(<Playlist>{
      'id': 4,
      'name': 'Para Dormir',
      'categories': [2],
      'musics': [1, 2],
      'image':
          'https://thumbs.dreamstime.com/b/listen-to-sleep-music-color-line-icon-autonomous-sensory-meridian-response-sound-waves-as-symbol-enjoying-sounds-editable-211152511.jpg',
      'link': '',
      'owner': 'sfotipy',
      'followers': [],
      'availability': 'public'
    }),
    new Playlist(<Playlist>{
      'id': 5,
      'name': 'Melhores Rock',
      'categories': [2],
      'musics': [1],
      'image':
          'https://assets.dragoart.com/images/140589_502/how-to-draw-strange-music-logo-strange-music-step-5_5e4cb46a6013c9.70891777_74088_5_3.gif',
      'link': '',
      'owner': 'sfotipy',
      'followers': [],
      'availability': 'public'
    }),
  ];

  idCount: number = 6;
  
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

  getUserPlaylists(ownerName: any): Playlist[] {
    const playlistsReturn: Playlist[] = []
    for (const playlist of this.playlists) {
     if (playlist.owner == ownerName) {
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

  getById(playlistId: number): Playlist | undefined {
    return this.playlists.find(({ id }) => id == playlistId);
  }


  update(playlist: Playlist): Playlist|null {
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

  addNewCategory(playlistId: number, category: number): Playlist | null {
    const playlist = this.getById(playlistId);
    if (!playlist) return null;
    if (playlist.categories.length >= 2) {
      return null;
    }
    // playlist.categories.push(category);
    var idx = playlist.categories.findIndex(ar => ar == category);
    if(idx == -1) {
      playlist.categories.push(category);
    }
    return playlist;
  }

  deleteCategory(playlistId: number, category: number): Playlist | null {
    const playlist = this.getById(playlistId);
    if (playlist?.categories.includes(category)) {
      var idx = playlist.categories.findIndex(ar => ar == category);
      if(idx != -1) {
        playlist.categories.splice(idx, 1);
      }
    } else {
      return null;
    }
    return playlist;
  }

}
