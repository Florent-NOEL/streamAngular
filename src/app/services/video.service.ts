import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class VideoService {
  constructor(private http: HttpClient) {}

  getVideo(path: string, type: string): Observable<any> {
    let videoInfos = {
      path: path,
      type: type,
    };

    let headers = new HttpHeaders({
      responseType: "blob",
    });

    return this.http.get(
      "http://localhost:8080/stream_spring/api/video/video/hero.webm"
    );
  }
}
