import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Router } from "@angular/router";
import { urlSpringStream } from "src/app/env";
import { VideoResponse } from "src/app/models/video-response";
import { VideoService } from "src/app/services/video.service";

@Component({
  selector: "app-card-list",
  templateUrl: "./card-list.component.html",
  styleUrls: ["./card-list.component.css"],
})
export class CardListComponent implements OnInit, OnChanges {
  url = urlSpringStream + "img/";
  videos!: Array<VideoResponse>;
  @Input()
  filteredVideo!: Array<VideoResponse>;
  @Input()
  page!: number;
  @Input()
  items = 18;
  constructor(private videoServ: VideoService, private router: Router) {}

  ngOnInit(): void {
    if (this.filteredVideo == null) {
      this.findAVideoPage();
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.findAVideoPage();
  }
  findAVideoPage() {
    this.videoServ.findAllByPage(this.page, this.items).subscribe((data) => {
      if (data.length == 0) {
        this.page--;
        console.log("page from card-list" + this.page);
        return;
      }
      this.videos = data;
      console.log(this.videos);
      console.log("page from card-list" + this.page);
    });
  }

  goToVideo(title: string) {
    this.router.navigateByUrl("video/" + title);
  }
}
