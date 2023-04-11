import { Playlist } from '../../../../common/playlist';
import { PlaylistsFilterPipe } from './playlists-filter.pipe';

describe('PlaylistsFilterPipe', () => {
  let pipe: PlaylistsFilterPipe;

  const mockPlaylist1 = new Playlist(<Playlist><unknown>{ "id": 0, "name": "Mix de Coldplay", "categories": [1], "musics": [0, 1, 2, 3, 4, 5, 6, 7, 8], "owner": "João", "availability": "public" });
  const mockPlaylist2 = new Playlist(<Playlist><unknown>{ 'id': 1, 'name': 'Melhores Pop', 'categories': [1], 'musics': [1], 'owner': 'sfotipy', 'availability': 'public' });
  const mockPlaylist3 = new Playlist(<Playlist><unknown>{ 'id': 2, 'name': 'Melhores Indie', 'categories': [3, 2], 'musics': [1, 2], 'owner': 'sfotipy', 'availability': 'public' });
  const mockPlaylist4 = new Playlist(<Playlist><unknown>{ 'id': 3, 'name': 'Para Você', 'categories': [2], 'musics': [0, 1, 2], 'owner': 'sfotipy', 'availability': 'private' });
  const mockPlaylists = [mockPlaylist1, mockPlaylist2, mockPlaylist3, mockPlaylist4];

  beforeEach(() => {
    pipe = new PlaylistsFilterPipe();
  });

  it('should return all playlists if no filter is applied', () => {
    const result = pipe.transform(mockPlaylists, '', []);
    expect(result).toEqual(mockPlaylists);
  });

  it('should return all playlists containing filter text', () => {
    const result = pipe.transform(mockPlaylists, 'Melhores', []);
    expect(result).toEqual([mockPlaylist2, mockPlaylist3]);
  });

  it('should return all playlists with at least one of the selected categories', () => {
    const result = pipe.transform(mockPlaylists, '', [1, 3]);
    expect(result).toEqual([mockPlaylist1, mockPlaylist2, mockPlaylist3]);
  });

  it('should return playlists containing filter text and with selected categories', () => {
    const result = pipe.transform(mockPlaylists, 'Mel', [1]);
    expect(result).toEqual([mockPlaylist2]);
  });

  it('should return an empty array if there are no playlists', () => {
    const result = pipe.transform([], '', []);
    expect(result).toEqual([]);
  });
});
