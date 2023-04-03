export class Music {
    id: number;
    name: string;
    author: string;
    image : string;
    link : string;
    duration : string;

    constructor(music: Music) {
        this.id = music.id;
        this.name = music.name;
        this.author = music.author;
        this.image = "";
        this.link = "";
        this.duration = "";
    }

    update(music: Music): void {
        this.name = music.name;
        this.author = music.author;
    }

}
