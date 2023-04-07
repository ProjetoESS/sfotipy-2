export class Music {
    id: number;
    name: string;
    author: string;
    image: string;
    link: string;
    duration: number;

    constructor(music: Music) {
        this.id = music.id;
        this.name = music.name;
        this.author = music.author;
        this.image = music.image;
        this.link = music.link;
        this.duration = music.duration;
    }

    /*update(music: Music): void {
        this.name = music.name;
        this.author = music.author;
    }*/
}