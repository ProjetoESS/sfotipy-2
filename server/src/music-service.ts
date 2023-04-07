import { Music } from "../../common/music";

export class MusicService {
    musics: Music[] = [
        new Music(<Music>{ 'id': 0, 'name': "Paradise", 'author': "Coldplay", 'image': "https://cdns-images.dzcdn.net/images/cover/e0dd8263dfed37c50a868abbf65fd7da/500x500.jpg", 'link': "", 'duration': 500, 'category': 1 }),
        new Music(<Music>{ 'id': 1, 'name': "Viva la Vida", 'author': "Coldplay", 'image': "https://upload.wikimedia.org/wikipedia/pt/d/d7/Vivalavida.jpg", 'link': "", 'duration': 500, 'category': 2 }),
        new Music(<Music>{ 'id': 2, 'name': "Yellow", 'author': "Coldplay", 'image': "https://i.pinimg.com/originals/f7/30/23/f7302371fb79c2d0cd817e9c28baaf62.jpg", 'link': "", 'duration': 500, 'category': 3 })];
    idCount: number = 3;

    add(music: Music): Music {
        const newMusic = new Music(<Music>{ id: this.idCount, ...music });
        this.musics.push(newMusic);
        this.idCount++;
        return newMusic;
    }

    update(music: Music): Music {
        const result: Music = this.musics.find(c => c.id == music.id);
        if (result instanceof Music) {
            result.update(<Music>music);
            return result;
        } else {
            return null;
        }
    }
    
    delete(id: number): boolean {
        const index = this.musics.findIndex(c => c.id === id);
        if(index >= 0){
            this.musics.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    }
      
    get(): Music[] {
        return this.musics;
    }

    getById(musicId: number): Music {
        return this.musics.find(({ id }) => id == musicId);
    }
}
