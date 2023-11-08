import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  constructor(private http: HttpClient) {}
  getGenre(): Observable<any> {
    return this.http.get('http://localhost:8080/stream_spring/api/genre/all');
  }
}
