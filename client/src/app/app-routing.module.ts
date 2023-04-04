import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CriarPlaylistComponent } from './criar-playlist/criar_playlist.component';
import { UserPlaylistsComponent } from './user-playlists/user_playlists.component';

const routes: Routes = [
  { path: 'criar_playlist', component: CriarPlaylistComponent},
  { path: 'minhas_playlists', component: UserPlaylistsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
