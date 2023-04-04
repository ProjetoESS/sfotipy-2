export class Music {
    id: number;
    name: string;
    author: string;
    playlistId: number;
    topSongsCount: number;

    constructor(music: Music) {
        this.id = music.id;
        this.name = music.name;
        this.author = music.author;
        this.playlistId = music.playlistId;
        this.topSongsCount = music.topSongsCount;
    }

    update(music: Music): void {
        this.name = music.name;
        this.author = music.author;
        this.playlistId = music.playlistId;
        this.topSongsCount = music.topSongsCount;
    }
}