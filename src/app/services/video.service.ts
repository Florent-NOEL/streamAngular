import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoResponse } from '../models/video-response';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private http: HttpClient) {}

  createVideoDb(title: string, type: string, listGenres: Array<string>) {
    let data = {
      title: title,
      genreEntitieId: listGenres,
      type: type,
    };
    console.log(data);
    const createVideoDb = this.http.post(
      'http://localhost:8080/stream_spring/api/video/create',
      data
    );
    createVideoDb.subscribe();
  }
  findByTitle(title: string): Observable<VideoResponse> {
    const findVideo = this.http.get(
      'http://localhost:8080/stream_spring/api/video/title/' + title
    );

    return findVideo;
  }

  captureImage(timeCapture: string, videoName: string) {
    let data = {
      timeCapture: timeCapture,
      videoName: videoName,
    };
    const screanShot = this.http.post(
      'http://localhost:8080/stream_spring/api/video/captureImage',
      data
    );
    screanShot.subscribe();
  }
  findAllByPage(page: number, items: number): Observable<any> {
    let videos = this.http.get(
      'http://localhost:8080/stream_spring/api/video/video_page' +
        page +
        '+' +
        items
    );
    return videos;
  }

  findByGenre(genre: string): Observable<any> {
    let videos = this.http.get(
      'http://localhost:8080/stream_spring/api/video/find-by-genre/' + genre
    );
    return videos;
  }
}
