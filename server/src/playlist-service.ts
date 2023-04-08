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
      "availability": "public"}),
    new Playlist(<Playlist>{
      "id": 1,
      "name": "Rocking with Imagine Dragons",
      "categories": [],
      "musics": [10, 11, 12, 13, 14],
      "image": "https://i.pinimg.com/736x/98/e6/d8/98e6d8ab4d4414eef0e90bb1382bfb86.jpg",
      "link": "",
      "owner": "",
      "followers": [],
      "availability": "public"
    }),
    new Playlist(<Playlist>{
      "id": 2,
      "name": "Eminem's Greatest Hits",
      "categories": [],
      "musics": [15, 16, 17],
      "image": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/eminem-miracle-studio.jpg",
      "link": "",
      "owner": "",
      "followers": [],
      "availability": "public"
    }),
    new Playlist(<Playlist>{
      "id": 3,
      "name": "League of Legends Mix",
      "categories": [],
      "musics": [18, 19, 20],
      "image": "https://cdns-images.dzcdn.net/images/artist/21e53b8e8285f84f60601d895c39c900/500x500.jpg",
      "link": "",
      "owner": "",
      "followers": [],
      "availability": "public"
    }),
    new Playlist(<Playlist>{
      "id": 4,
      "name": "The NBHD",
      "categories": [],
      "musics": [21, 22, 23, 24],
      "image": "https://i.pinimg.com/564x/78/35/fb/7835fb0bef03a3332c89c681f020da87--music-bands-.jpg",
      "link": "",
      "owner": "",
      "followers": [],
      "availability": "public"
    })
  ];
  idCount: number = 0;
  categories: Category[] = [];

  get(): Playlist[] {
    return this.playlists;
  }

  getById(playlistId: number): Playlist | undefined {
    return this.playlists.find(({ id }) => id == playlistId);
  }

  add(playlist: Playlist): Playlist {
    const newPlaylist = new Playlist(<Playlist>{ ...playlist, id: this.idCount });
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

  addNewCategory(playlistId: number, category: number): Playlist | null {
    const playlist = this.getById(playlistId);
    if (!playlist) return null;
    if (playlist.categories.length > 2) {
      return null;
    }
    playlist.categories.push(category);
    return playlist;
  }

  deleteCategory(playlistId: number, category: number): Playlist | null {
    const playlist = this.getById(playlistId);
    if (playlist.categories.includes(category)) {
      playlist.categories.splice(playlistId, 1);
    } else {
      return null;
    }
    return playlist;
  }
}
