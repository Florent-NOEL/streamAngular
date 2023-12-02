import { VideoService } from "src/app/services/video.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, ElementRef, ViewChild } from "@angular/core";
import { throwError } from "rxjs";
import { urlSpringStream } from "src/app/env";

@Component({
  selector: "app-upload-video",
  templateUrl: "./upload-video.component.html",
  styleUrls: ["./upload-video.component.css"],
})
export class UploadVideoComponent {
  status: "initial" | "uploading" | "success" | "fail" = "initial"; // Variable to store file status
  videoPath!: string;
  videoName!: string;
  type!: string;
  file: File | null = null; // Variable to store file
  genreToSend = [];

  constructor(private http: HttpClient, private videoServ: VideoService) {}

  ngOnInit(): void {}

  // On file Select
  onChange(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.status = "initial";
      this.file = file;
    }
  }
  addGenreList(genres: any) {
    this.genreToSend = genres;
    console.log(this.genreToSend);
  }

  refresh() {
    if (this.file) {
      this.type = this.file.type;
      this.videoName = this.file.name;
      let video = <HTMLVideoElement>document.getElementById("video");
      video.src = urlSpringStream + this.type + "/" + this.videoName;
      if (this.videoName.includes(".avi") || this.videoName.includes(".mkv")) {
        video.src =
          urlSpringStream + "video/mp4" + "/" + this.videoName + "to.mp4";
      }
    }
  }

  capture() {
    if (this.file) {
      let video = <HTMLVideoElement>document.getElementById("video");
      let timeCapture = video.currentTime.toFixed(2);
      this.videoName = this.file.name;
      this.videoServ.captureImage(timeCapture, this.videoName);
    }
  }

  timeCapture() {
    let video = <HTMLVideoElement>document.getElementById("video");
    console.log("duration" + video.duration);
    console.log(video.currentTime.toFixed(2));
  }

  //create the video in the data base and add genre relationship

  createVideoDataBase() {
    if (this.file) {
      this.videoServ.createVideoDb(
        this.file!.name,
        this.file!.type,
        this.genreToSend
      );
    }
  }

  onUpload() {
    this.refresh();
    if (this.file) {
      const formData = new FormData();

      formData.append("file", this.file, this.file.name);
      const upload = this.http.post(
        "http://localhost:8080/stream_spring/api/video/uploadVideo",
        formData
      );

      this.status = "uploading";

      upload.subscribe({
        next: (data) => {
          this.status = "success";
          this.videoPath = data.toString();
        },
        error: (error: any) => {
          if (error.error.text) {
            this.status = "success";
            this.videoPath = error.error.text;
            console.log(this.videoPath);
            this.createVideoDataBase();
            this.refresh();
            return;
          }

          this.status = "fail";
          return throwError(() => error);
        },
      });
    }
  }
}
