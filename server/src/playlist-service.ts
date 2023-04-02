import { Playlist } from '../../common/playlist'

export class PlaylistService {
  playlists: Playlist[] = [];

  playlistEA: Playlist[] = [];

  getEA(): Playlist[] {
    return this.playlistEA;
  }

  get(): Playlist[] {
    return this.playlists;
  }

  getById(playlistId: number): Playlist {
    return this.playlists.find(({ id }) => id == playlistId);
  }

}
