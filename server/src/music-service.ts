import {Music} from '../../common/music';

export class MusicService {
    musics: Music[] = [
        new Music(<Music>{ 'id': 0, 'name': "Hymn for the Weekend", 'author': "Coldplay", 'image': "https://upload.wikimedia.org/wikipedia/pt/6/61/Coldplay_Hymn_for_the_Weekend.jpg", 'link': "", 'duration': 500, 'category': 3 }),
        new Music(<Music>{ 'id': 1, 'name': "Viva la Vida", 'author': "Coldplay", 'image': "https://upload.wikimedia.org/wikipedia/pt/d/d7/Vivalavida.jpg", 'link': "", 'duration': 500, 'category': 2 }),
        new Music(<Music>{ 'id': 2, 'name': "Yellow", 'author': "Coldplay", 'image': "https://i.pinimg.com/originals/f7/30/23/f7302371fb79c2d0cd817e9c28baaf62.jpg", 'link': "", 'duration': 500, 'category': 3 }),
        new Music(<Music>{ 'id': 3, 'name': "Paradise", 'author': "Coldplay", 'image': "https://cdns-images.dzcdn.net/images/cover/e0dd8263dfed37c50a868abbf65fd7da/500x500.jpg", 'link': "", 'duration': 500, 'category': 1 }),
        new Music(<Music>{ 'id': 4, 'name': "The Scientist", 'author': "Coldplay", 'image': "https://qph.cf2.quoracdn.net/main-qimg-9488341d4770aca142f13919807a8a41.webp", 'link': "", 'duration': 500, 'category': 3 }),
        new Music(<Music>{ 'id': 5, 'name': "A Sky Full of Stars", 'author': "Coldplay", 'image': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST88mVwsW3uPveto6AGE-Nz4Llqb9dZyoIfPd91Brc2A&s", 'link': "", 'duration': 500, 'category': 3 }),
        new Music(<Music>{ 'id': 6, 'name': "Let Somebody Go", 'author': "Coldplay", 'image': "https://upload.wikimedia.org/wikipedia/pt/7/7d/Let_Somebody_Go_-_Coldplay_e_Selena_Gomez.png", 'link': "", 'duration': 500, 'category': 3 }),
        new Music(<Music>{ 'id': 7, 'name': "Something Just Like This", 'author': "Coldplay", 'image': "https://i1.sndcdn.com/artworks-000252497555-rdia79-t500x500.jpg", 'link': "", 'duration': 500, 'category': 3 }),
        new Music(<Music>{ 'id': 8, 'name': "Clocks", 'author': "Coldplay", 'image': "https://upload.wikimedia.org/wikipedia/pt/9/96/Clocks_single.jpg", 'link': "", 'duration': 500, 'category': 3 }),
        new Music(<Music>{ 'id': 9, 'name': "Another Day in Paradise", 'author': "Phil Collins", 'image': "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Phil_Collins_AnotherDayInParadise.jpg/220px-Phil_Collins_AnotherDayInParadise.jpg", 'link': "", 'duration': 500, 'category': 3 })
    ];
    idCount: number = 6;

  add(music: Music): Music {
    const newMusic = new Music(<Music>{id: this.idCount, ...music});
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
    if (index >= 0) {
      this.musics.splice(index, 1);
      return true;
    } else {
      return false;
    }

    delete(id: number): boolean {
        const index = this.musics.findIndex(c => c.id === id);
        if (index >= 0) {
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

  get(): Music[] {
    return this.musics;
  }

  getById(musicId: number): Music {
    return this.musics.find(({id}) => id == musicId);
  }
}
