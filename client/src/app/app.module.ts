import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlaylistCardComponent } from './playlist-card/playlist-card.component';
import { MusicCardComponent } from './music-card/music-card.component';
import { PageBuscaComponent } from './pages/page-busca/page-busca.component';
import { PlayerComponent } from './player/player.component';
import { PlaylistRecomendadasComponent } from './playlist-recomendadas/playlist-recomendadas.component';
import { PlaylistCardRecomendComponent } from './playlist-card-recomend/playlist-card-recomend.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlaylistCardComponent,
    MusicCardComponent,
    PageBuscaComponent,
    PlayerComponent
    AppComponent,
    PlaylistRecomendadasComponent,
    PlaylistCardRecomendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
