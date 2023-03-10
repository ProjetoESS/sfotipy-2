import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompartilhamentoComponent } from './compartilhamento/compartilhamento.component';
import { CriacaoCategoriasComponent } from './criacao-categorias/criacao-categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    CompartilhamentoComponent,
    CriacaoCategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
