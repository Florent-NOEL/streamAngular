import { VideoPageComponent } from './routes/video-page/video-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { TestComponent } from './routes/test/test.component';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'video', component: VideoPageComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
