export class Music {
    id: number;
    name: string;
    author: string;

    constructor(music: Music) {
        this.id = music.id;
        this.name = music.name;
        this.author = music.author;
    }

    update(music: Music): void {
        this.name = music.name;
        this.author = music.author;
    }

}
