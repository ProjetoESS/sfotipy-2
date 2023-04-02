import { Playlist } from '../../common/Playlist'

export class PlaylistService {
    playlistEA : Playlist[] = [];
    playlistPB : Playlist[] = [];
    playlistRC : Playlist[] = [];
    playlistMN : Playlist[] = [];

    getEA() : Playlist[] {
      return this.playlistEA;
    }

    getPB() : Playlist[] {
      return this.playlistPB;
    }

    getRC() : Playlist[] {
      return this.playlistRC;
    }

    getMN() : Playlist[] {
      return this.playlistMN;
    }
  }