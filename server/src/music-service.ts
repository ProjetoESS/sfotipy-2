import { Music } from "../../common/music";

export class MusicService {
    musics: Music[] = [{ 'id': 0, 'name': "Paradise", 'author': "Coldplay", 'image': "https://cdns-images.dzcdn.net/images/cover/e0dd8263dfed37c50a868abbf65fd7da/500x500.jpg", 'link': "", 'duration': 500 },
    { 'id': 1, 'name': "Viva la Vida", 'author': "Coldplay", 'image': "https://upload.wikimedia.org/wikipedia/pt/d/d7/Vivalavida.jpg", 'link': "", 'duration': 500 },
    { 'id': 2, 'name': "Yellow", 'author': "Coldplay", 'image': "https://i.pinimg.com/originals/f7/30/23/f7302371fb79c2d0cd817e9c28baaf62.jpg", 'link': "", 'duration': 500 }];
    idCount: number = 3;

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
        //if (result) result.update(music);
        return result;
    }

    get(): Music[] {
        return this.musics;
    }

    getById(musicId: number): Music {
        return this.musics.find(({ id }) => id == musicId);
    }
}
