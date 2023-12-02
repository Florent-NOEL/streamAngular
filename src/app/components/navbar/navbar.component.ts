import { VideoResponse } from "./../../models/video-response";

import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { GenreService } from "src/app/services/genre.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  genre!: string;
  genreList!: Array<string>;

  constructor(private router: Router, private genreServ: GenreService) {}
  ngOnInit(): void {
    this.getGenreList();
  }
  getGenreList() {
    this.genreServ.getGenre().subscribe((data) => {
      this.genreList = data;
    });
  }

  goUpload() {
    this.router.navigateByUrl("/upload");
  }

  goHome() {
    this.router.navigateByUrl("");
  }

  selectGenre() {
    if (this.genre == null || this.genre.length == 0) {
      console.log("empty genre input");
      return;
    }
    this.router.navigateByUrl("/find-by-genre/" + this.genre);
    /*  this.videoServ.findByGenre(this.genre).subscribe((data) => {
      this.filteredVideo = data;
      console.log(data);
    }); */
  }
}
