import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-genre-list-button',
  templateUrl: './genre-list-button.component.html',
  styleUrls: ['./genre-list-button.component.css'],
})
export class GenreListButtonComponent implements OnInit {
  genreList!: Array<string>;
  genreToSend = new Array();
  constructor(private genreServ: GenreService) {}
  ngOnInit(): void {
    this.getGenreList();
  }
  getGenreList() {
    this.genreServ.getGenre().subscribe((data) => {
      this.genreList = data;
    });
  }
  @Output()
  genreEmitter = new EventEmitter<any>();
  addGenre(genre: string) {
    this.genreToSend.push(genre);
    let genreButton = <HTMLButtonElement>document.getElementById(genre);
    genreButton.disabled = true;
    this.genreEmitter.emit(this.genreToSend);
  }
}
