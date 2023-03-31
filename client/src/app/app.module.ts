import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistRecomendadasComponent } from './playlist-recomendadas/playlist-recomendadas.component';
import { PlaylistCardRecomendComponent } from './playlist-card-recomend/playlist-card-recomend.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistRecomendadasComponent,
    PlaylistCardRecomendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
