import { Music } from './Music';

export class Playlist {
    id : number;
    name : string;
    image : string;
    musics : Music[];

    constructor() {
        this.id = 0;
        this.name = "";
        this.image = "";
        this.musics = [];
    }
}
