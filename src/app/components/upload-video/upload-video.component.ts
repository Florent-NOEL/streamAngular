import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component } from "@angular/core";
import { throwError } from "rxjs";

@Component({
  selector: "app-upload-video",
  templateUrl: "./upload-video.component.html",
  styleUrls: ["./upload-video.component.css"],
})
export class UploadVideoComponent {
  status: "initial" | "uploading" | "success" | "fail" = "initial"; // Variable to store file status
  videoPath!: string;
  imgPath!: string;
  file: File | null = null; // Variable to store file

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  // On file Select
  onChange(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.status = "initial";
      this.file = file;
    }
  }

  capture() {
    let thumbnail = <HTMLCanvasElement>document.getElementById("thumbnail");
    let video = <HTMLVideoElement>document.getElementById("video");

    let ctx = thumbnail.getContext("2d");
    thumbnail.width = 1920;
    thumbnail.height = 1080;
    thumbnail
      .getContext("2d")!
      .drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    /* let blobimg = thumbnail.toBlob((blob) =>
      this.blobToFile(blob!, 'imageName.png')
    ); */
  }

  /* public blobToFile = (theBlob: Blob, fileName: string): File => {
    const b: any = theBlob;
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    b.lastModifiedDate = new Date();
    b.name = fileName;
    console.log(theBlob);

    //Cast to a File() type
    return theBlob as File;
  } */

  testButton() {
    const test = this.http.get(
      "http://localhost:8080/stream_spring/api/video/test"
    );
    test.subscribe();
  }

  onUpload() {
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
            return;
          }

          this.status = "fail";
          return throwError(() => error);
        },
      });
    }
  }
}
