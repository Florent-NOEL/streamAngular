import { VideoPageComponent } from "./routes/video-page/video-page.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./routes/home/home.component";
import { TestComponent } from "./routes/test/test.component";
import { UploadPageComponent } from "./routes/upload-page/upload-page.component";

const routes: Routes = [
  { path: "upload", component: UploadPageComponent },
  { path: "video", component: VideoPageComponent },
  { path: "", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
