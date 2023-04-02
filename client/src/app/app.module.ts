import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompartilhamentoComponent } from './compartilhamento/compartilhamento.component';
import { CriacaoCategoriasComponent } from './criacao-categorias/criacao-categorias.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { PlaylistCardComponent } from './playlist-card/playlist-card.component';
import { MusicCardComponent } from './music-card/music-card.component';
import { PageBuscaComponent } from './pages/page-busca/page-busca.component';
import { PlayerComponent } from './player/player.component';
import { MusicsFilterPipe } from './musics-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CompartilhamentoComponent,
    CriacaoCategoriasComponent,
    NavbarComponent,
    PlayerComponent,
    PlaylistCardComponent,
    MusicCardComponent,
    PageBuscaComponent,
    MusicsFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    RouterModule.forRoot([
      {
        path: 'busca',
        component: PageBuscaComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
