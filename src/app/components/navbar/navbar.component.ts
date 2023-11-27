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
  constructor(private genreServ: GenreService) {}
  ngOnInit(): void {
    this.getGenreList();
  }
  getGenreList() {
    this.genreServ.getGenre().subscribe((data) => {
      this.genreList = data;
    });
  }

  selectGenre() {
    console.log(this.genreList);
  }
}
