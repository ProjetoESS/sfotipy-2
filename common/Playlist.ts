import { Music } from "./music";
import { Category } from "./Category";

export class Playlist {
    id: number;
    ownerId: number;
    name: string;
    image: string;
    musics: Music[];
    isPublic: boolean; 
    categories: Category[] | string[];
    
    

    constructor(id: number, name: string, ownerId: number, image: string, isPublic: boolean, categories: Category[] | string[], musics: Music[]) {
        this.id = id;
        this.name = name;
        this.ownerId = ownerId;
        this.image = image;
        this.isPublic = isPublic;
        this.categories = categories;
        this.musics = musics;
      }

    

    /*update(playlist: Playlist): void {
        this.id = playlist.id;
        this.categories = playlist.categories;
        this.musics = playlist.musics;
    }*/

}
