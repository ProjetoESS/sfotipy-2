import { TestBed } from '@angular/core/testing';

import { MusicPlayerService } from './music-player.service';
import { HttpClientModule } from '@angular/common/http';

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
});
