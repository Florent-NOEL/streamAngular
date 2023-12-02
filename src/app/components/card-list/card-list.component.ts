import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { urlSpringStream } from "src/app/env";
import { VideoResponse } from "src/app/models/video-response";
import { VideoService } from "src/app/services/video.service";

@Component({
  selector: "app-card-list",
  templateUrl: "./card-list.component.html",
  styleUrls: ["./card-list.component.css"],
})
export class CardListComponent implements OnInit {
  url = urlSpringStream + "img/";
  videos!: Array<VideoResponse>;
  @Input()
  filteredVideo!: Array<VideoResponse>;
  @Input()
  page = 0;
  @Input()
  items = 18;
  constructor(private videoServ: VideoService, private router: Router) {}
  ngOnInit(): void {
    if (this.filteredVideo == null) {
      this.findAVideoPage();
    }
  }
  findAVideoPage() {
    this.videoServ.findAllByPage(this.page, this.items).subscribe((data) => {
      this.videos = data;
      console.log(this.videos);
    });
  }

  goToVideo(title: string) {
    this.router.navigateByUrl("video/" + title);
  }
}
