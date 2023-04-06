import { Music } from "./music";

export class Playlist {
    id: number;
    ownerId: number;
    name: string;
    image: string;
    songs: Music[];
    categories: string[];
    isPublic: boolean; 

    constructor(playlist: Playlist) {
        this.id = playlist.id;
        this.ownerId = playlist.ownerId;
        this.name = playlist.name;
        this.image = "";
        this.songs = [];
        this.categories = playlist.categories;
        this.isPublic = playlist.isPublic;
    }

    

}
