import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoRequest } from '../models/video-request';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private http: HttpClient) {}

  createVideoDb(title: string, listGenres: Array<string>) {
    let data = {
      title: title,
      genreEntitieId: listGenres,
    };
    console.log(data);
    const createVideoDb = this.http.post(
      'http://localhost:8080/stream_spring/api/video/create',
      data
    );
    createVideoDb.subscribe();
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
}
