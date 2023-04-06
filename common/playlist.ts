import { Music } from "./music";
import { Category } from "./Category";

export class Playlist {
    id: number;
    ownerId: number;
    name: string;
    image: string;
    songs: Music[];
    isPublic: boolean; 
    categories: Category[] | string[];
    
    

    constructor(playlist: Playlist) {
        this.id = playlist.id;
        this.ownerId = playlist.ownerId;
        this.name = playlist.name;
        this.image = "";
        this.songs = [];
        this.categories = playlist.categories;
        this.isPublic = playlist.isPublic;
    }

    

    /*update(playlist: Playlist): void {
        this.id = playlist.id;
        this.categories = playlist.categories;
        this.musics = playlist.musics;
    }*/

}
