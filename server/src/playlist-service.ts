import { Playlist } from '../../common/playlist'

export class PlaylistService {
    playlists: Playlist[] = [];

    get(): Playlist[] {
        return this.playlists;
    }

    getById(playlistId: number) : Playlist {
        return this.playlists.find(({ id }) => id == playlistId);
    }

}