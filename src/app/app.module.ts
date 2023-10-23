import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './routes/home/home.component';
import { VideoPlayerComponent } from './components/video/video-player/video-player.component';
import { VideoPageComponent } from './routes/video-page/video-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    HomeComponent,
    VideoPlayerComponent,
    VideoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
