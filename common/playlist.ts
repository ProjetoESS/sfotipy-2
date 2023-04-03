import { Music } from "./music";
import { Category } from "./Category";

export class Playlist {
    id: number;
    categories : Category[];
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
