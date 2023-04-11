import { TestBed } from '@angular/core/testing';

import { MusicPlayerService } from './music-player.service';
import { HttpClientModule } from '@angular/common/http';
import { Music } from '../../../../common/music';

describe('MusicPlayerService', () => {
  let service: MusicPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(MusicPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should play music', () => {
    const music: Music = new Music(<Music>{ 'id': 0, 'name': "Hymn for the Weekend", 'author': "Coldplay", 'image': "https://upload.wikimedia.org/wikipedia/pt/6/61/Coldplay_Hymn_for_the_Weekend.jpg", 'link': "", 'duration': 500, 'category': 3 });
    spyOn(service, 'play');
    service.playMusic(music);
    expect(service.currentMusic).toEqual(music);
    expect(service.play).toHaveBeenCalled();
  });
});
