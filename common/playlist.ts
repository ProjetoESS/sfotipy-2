import { Music } from "./music";

export class Playlist {
    id: number;
    name: string;
    categories: string[];
    musics: Music[];
    image: string;
    songs: Music[];

    constructor(playlist: Playlist) {
        this.id = playlist.id;
        this.name = playlist.name;
        this.categories = playlist.categories;
        this.musics = playlist.musics;
        this.image = "";
        this.songs = [];
    }

    update(playlist: Playlist): void {
        this.id = playlist.id;
        this.categories = playlist.categories;
        this.musics = playlist.musics;
    }

}
