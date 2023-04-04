import { Music } from "../../common/music";

export class MusicService {
    musics: Music[] = [];
    idCount: number = 0;
    add(music: Music): Music {
        if (this.musics.length >= 10) return null;
        const newMusic = new Music(<Music>{ id: this.idCount, ...music });
        // if (newMusic.price <= 0) {
        //     throw Error("Price can't equal or less than zero")
        // }
        this.musics.push(newMusic);
        this.idCount++;
        return newMusic;
    }

    update(music: Music): Music {
        console.log(this.musics)
        var result: Music = this.musics.find(c => c.id == c.id);
        if (result) result.update(music);
        return result;
    }

    get(): Music[] {
        return this.musics;
    }

    getById(musicId: number): Music {
        return this.musics.find(({ id }) => id == musicId);
    }
}
