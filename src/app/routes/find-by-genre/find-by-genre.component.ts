import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { VideoResponse } from "src/app/models/video-response";
import { VideoService } from "src/app/services/video.service";

@Component({
  selector: "app-find-by-genre",
  templateUrl: "./find-by-genre.component.html",
  styleUrls: ["./find-by-genre.component.css"],
})
export class FindByGenreComponent implements OnInit {
  filteredVideo!: Array<VideoResponse>;
  genre!: string;
  constructor(private videoServ: VideoService, private aR: ActivatedRoute) {}
  ngOnInit(): void {
    this.updateGenreAndFindVideo();
  }

  updateGenreAndFindVideo() {
    this.aR.params.subscribe((params) => {
      this.genre = params["genre"];
      this.searchVideo();
    });
  }

  searchVideo() {
    this.videoServ.findByGenre(this.genre).subscribe((data) => {
      this.filteredVideo = data;
    });
  }
}
