import { Component, Input } from "@angular/core";
import { urlSpringStream } from "src/app/env";

@Component({
  selector: "app-video-player",
  templateUrl: "./video-player.component.html",
  styleUrls: ["./video-player.component.css"],
})
export class VideoPlayerComponent {
  path = urlSpringStream;
  @Input()
  id!: string;
  @Input()
  title!: string;
  @Input()
  type!: string;
  url = this.path + this.type + "/" + this.title;
}
