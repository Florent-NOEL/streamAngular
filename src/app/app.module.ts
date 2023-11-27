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
import { UploadPageComponent } from './routes/upload-page/upload-page.component';
import { GenreListButtonComponent } from './components/genre-list-button/genre-list-button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    HomeComponent,
    VideoPlayerComponent,
    VideoPageComponent,
    UploadVideoComponent,
    TestComponent,
    UploadPageComponent,
    GenreListButtonComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
