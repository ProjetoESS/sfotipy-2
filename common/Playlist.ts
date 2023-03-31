import { Music } from './Music';

export class Playlist {
    id : number;
    name : string;
    image : string;
    songs : Music[];

    constructor() {
        this.id = 0;
        this.name = "";
        this.image = "";
        this.songs = [];
    }
}
