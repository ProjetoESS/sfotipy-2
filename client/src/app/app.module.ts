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
import { PlaylistRecomendadasComponent } from './playlist-recomendadas/playlist-recomendadas.component';
import { PlaylistCardRecomendComponent } from './playlist-card-recomend/playlist-card-recomend.component';
import { MusicsFilterPipe } from './musics-filter.pipe';

import { HomepageComponent } from './homepage/homepage.component';
import { ProfilepageComponent } from './navbar/profilepage/profilepage.component';


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
    PlayerComponent,
    AppComponent,
    PlaylistRecomendadasComponent,
    PlaylistCardRecomendComponent,
    MusicsFilterPipe,
    HomepageComponent,
    ProfilepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'busca',
        component: PageBuscaComponent
      },
      {
        path: 'explorar',
        component: PlaylistRecomendadasComponent
      },
      {
        path: 'categorias/:id',
        component : CriacaoCategoriasComponent
      },
      {
        path: 'compartilhar/:id',
        component : CompartilhamentoComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
