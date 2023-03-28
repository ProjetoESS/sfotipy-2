import { Playlist } from '../../client/src/app/Playlist';

export class PlaylistService {
    playlistEA: Playlist[] = [];

    getEA() : Playlist[] {
      return this.playlistEA;
    }
  }