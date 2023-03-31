import { Playlist } from '../../common/Playlist'

export class PlaylistService {
    playlistEA: Playlist[] = [];

    getEA() : Playlist[] {
      return this.playlistEA;
    }
  }