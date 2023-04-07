import { Pipe, PipeTransform } from '@angular/core';
import { Playlist } from '../../../common/playlist';

@Pipe({
  name: 'playlistsFilter'
})
export class PlaylistsFilterPipe implements PipeTransform {

  transform(playlists: Playlist[], filterText: string): Playlist[] {
    if (!playlists) {
      return [];
    }
    if (!filterText) {
      return playlists;
    }

    return playlists.filter(playlist => {
      return this.playlistContainsFilterText(playlist, filterText);
    });
  }

  private playlistContainsFilterText(playlist: Playlist, filterText: string): boolean {
    filterText = filterText.toLocaleLowerCase();
    const filterTerms = filterText.split(' ');
    for (const filterTerm of filterTerms) {
      const hasFilterTerm = this.playlistContainsFilterTerm(playlist, filterTerm);
      if (hasFilterTerm === false) {
        return false;
      }
    }

    return true;
  }

  private playlistContainsFilterTerm(playlist: Playlist, filterTerm: string) {
    return playlist.name.toLocaleLowerCase().includes(filterTerm);
  }

}
