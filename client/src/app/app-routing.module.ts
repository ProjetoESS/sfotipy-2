import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistRecomendadasComponent } from './playlist-recomendadas/playlist-recomendadas.component';

const routes: Routes = [
  { path: 'playlistsrecomendadas', component: PlaylistRecomendadasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
