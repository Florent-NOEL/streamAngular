import { Component } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { VideoService } from "src/app/services/video.service";

@Component({
  selector: "app-video-player",
  templateUrl: "./video-player.component.html",
  styleUrls: ["./video-player.component.css"],
})
export class VideoPlayerComponent {
  path = "C://Users//Flo//Documents//wb//videoFile//hero.webm";
  type = "video/webm";

  videoUrl!: SafeResourceUrl;
  blob!: Blob;

  constructor(
    private videoService: VideoService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.videoService.getVideo(this.path, this.type).subscribe({
      next: (data) => {
        console.log(data);
        /* console.log("next working");
        const blobUrl = URL.createObjectURL(videoBlob);
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(blobUrl); */
      },
      error: (error) => {
        console.log(error);
        console.log(error.url);
        this.videoUrl = error.url;
        console.log("error work");

        /*  console.log("error working");
        this.blob = videoBlob.error.text;
        console.log(this.blob);
        const blobUrl = URL.createObjectURL(this.blob);
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(blobUrl);
        console.log("url" + this.videoUrl); */
      },
    });
  }

  public blobToFile = (theBlob: Blob, fileName: string): File => {
    const b: any = theBlob;
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    b.lastModifiedDate = new Date();
    b.name = fileName;

    //Cast to a File() type
    return theBlob as File;
  };
}
