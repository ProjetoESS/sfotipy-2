import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CriarPlaylistComponent } from './componentes/criar-playlist/criar_playlist.component';
import { UserPlaylistsComponent } from './componentes/user-playlists/user_playlists.component';

const routes: Routes = [
  { path: 'criar_playlist', component: CriarPlaylistComponent},
  { path: 'minhas_playlists', component: UserPlaylistsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
