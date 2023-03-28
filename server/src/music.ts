export class Music {
    id: number;
    name: string;
    author: string;
    playlistId: number;
    categories : string[];
    playlistLink : string;

    constructor(music: Music) {
        this.id = music.id;
        this.name = music.name;
        this.author = music.author;
        this.playlistId = music.playlistId;
        this.categories = music.categories;
        this.playlistLink  = music.playlistLink;
    }

    update(music: Music): void {
        this.name = music.name;
        this.author = music.author;
        this.playlistId = music.playlistId;
        this.categories = music.categories;
        this.playlistLink  = music.playlistLink;
    }

}
