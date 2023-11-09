import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { urlSpringStream } from "src/app/env";
import { VideoResponse } from "src/app/models/video-response";
import { VideoService } from "src/app/services/video.service";

@Component({
  selector: "app-video-page",
  templateUrl: "./video-page.component.html",
  styleUrls: ["./video-page.component.css"],
})
export class VideoPageComponent implements OnInit {
  video!: VideoResponse;
  url!: string;
  //urlSpringStream + this.video.type + "/" + this.video.title

  constructor(private aR: ActivatedRoute, private videoServ: VideoService) {}

  ngOnInit(): void {
    this.videoServ
      .findByTitle(this.aR.snapshot.params["video_title"])
      .subscribe((data) => {
        this.video = data;
        this.url = urlSpringStream + this.video.type + "/" + this.video.title;
      });
  }
}
