import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistComponent } from './playlist.component';
import { CompartilhamentoComponent } from '../compartilhamento/compartilhamento.component';

@NgModule({
  declarations: [
    PlaylistComponent,
    CompartilhamentoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlaylistComponent
  ]
})
export class PlaylistModule { }
