import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './routes/home/home.component';
import { VideoPlayerComponent } from './components/video/video-player/video-player.component';
import { VideoPageComponent } from './routes/video-page/video-page.component';
import { UploadVideoComponent } from './components/upload-video/upload-video.component';
import { TestComponent } from './routes/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    HomeComponent,
    VideoPlayerComponent,
    VideoPageComponent,
    UploadVideoComponent,
    TestComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
