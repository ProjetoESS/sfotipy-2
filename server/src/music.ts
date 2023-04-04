export class Music {
    id: number;
    name: string;
    author: string;
    playlistId: number;

    constructor(music: Music) {
        this.id = music.id;
        this.name = music.name;
        this.author = music.author;
        this.playlistId = music.playlistId;
    }

    update(music: Music): void {
        this.name = music.name;
        this.author = music.author;
        this.playlistId = music.playlistId;
    }
}