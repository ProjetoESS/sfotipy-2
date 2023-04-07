import { Music } from "./music";
import { Category } from "./category";

export class Playlist {
    id: number;
    name: string;
    categories: Category[];
    musics: Music[];
    image: string;
    link: string;
    owner: string;
    followers: string[];
    availability: string;

    constructor(playlist: Playlist) {
        this.id = playlist.id;
        this.name = playlist.name;
        this.categories = playlist.categories;
        this.musics = playlist.musics;
        this.image = playlist.image;
        this.link = playlist.link;
        this.owner = playlist.owner;
        this.followers = playlist.followers;
        this.availability = playlist.availability;
    }
}