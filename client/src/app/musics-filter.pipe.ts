import { Pipe, PipeTransform } from '@angular/core';
import { Music } from '../../../common/music';
import { Playlist } from '../../../common/playlist';

@Pipe({ name: 'musicsFilter' })
export class MusicsFilterPipe implements PipeTransform {

  transform(musics: Music[], filterText: string): Music[] {
    if (!musics) {
      return [];
    }
    if (!filterText) {
      return musics;
    }

    return musics.filter(music => {
      return this.musicContainsFilterText(music, filterText);
    });
  }

  private musicContainsFilterText(music: Music, filterText: string): boolean {
    filterText = filterText.toLocaleLowerCase();
    const filterTerms = filterText.split(' ');
    for (const filterTerm of filterTerms) {
      const hasFilterTerm = this.musicContainsFilterTerm(music, filterTerm);
      if (hasFilterTerm === false) {
        return false;
      }
    }

    return true;
  }

  private musicContainsFilterTerm(music: Music, filterTerm: string) {
    return music.name.toLocaleLowerCase().includes(filterTerm);
  }

}
