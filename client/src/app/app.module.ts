import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { ProfilepageComponent } from './taskbar/profilepage/profilepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TaskbarComponent,
    ProfilepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
