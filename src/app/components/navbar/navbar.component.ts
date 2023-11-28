import { VideoResponse } from './../../models/video-response';
import { VideoService } from 'src/app/services/video.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  genre!: string;
  genreList!: Array<string>;
  filteredVideo!: Array<VideoResponse>;
  constructor(
    private genreServ: GenreService,
    private videoServ: VideoService
  ) {}
  ngOnInit(): void {
    this.getGenreList();
  }
  getGenreList() {
    this.genreServ.getGenre().subscribe((data) => {
      this.genreList = data;
    });
  }

  selectGenre() {
    if (this.genre == null || this.genre.length == 0) {
      console.log('empty genre input');
    }
    this.videoServ.findByGenre(this.genre).subscribe((data) => {
      this.filteredVideo = data;
      console.log(data);
    });
  }
}
