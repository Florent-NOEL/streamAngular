import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { urlSpringStream } from "src/app/env";

@Component({
  selector: "app-video-player",
  templateUrl: "./video-player.component.html",
  styleUrls: ["./video-player.component.css"],
})
export class VideoPlayerComponent implements OnInit {
  path = urlSpringStream;
  @Input()
  title!: string;
  @Input()
  type!: string;
  @Input()
  url!: string;
  ngOnInit(): void {}
}
