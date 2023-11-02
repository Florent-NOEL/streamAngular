import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
})
export class VideoPlayerComponent {
  path = 'http://localhost:8082/api/stream/';
  type = 'webm';
  title = 'hero';
  typeInput = 'video/' + this.type;
  url = this.path + this.typeInput + '/' + this.title + '.' + this.type;
}
