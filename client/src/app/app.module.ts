import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistRecomendadasComponent } from './playlist-recomendadas/playlist-recomendadas.component';
import { PlaylistCardComponent } from './playlist-card/playlist-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistRecomendadasComponent,
    PlaylistCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
