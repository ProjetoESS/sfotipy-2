import { Music } from "./music";

export class Playlist {
    id: number;
    categories : string[];
    musics: Music[];

    constructor(playlist: Playlist) {
        this.id = playlist.id;
        this.categories = playlist.categories;
        this.musics  = playlist.musics;
    }

    update(playlist: Playlist): void {
        this.id = playlist.id;
        this.categories = playlist.categories;
        this.musics  = playlist.musics;
    }

}
