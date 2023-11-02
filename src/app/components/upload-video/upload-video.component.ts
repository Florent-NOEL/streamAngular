import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css'],
})
export class UploadVideoComponent {
  status: 'initial' | 'uploading' | 'success' | 'fail' = 'initial'; // Variable to store file status
  videoPath!: string;
  imgPath!: string;

  videoName = 'test';
  file: File | null = null; // Variable to store file

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  // On file Select
  onChange(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.status = 'initial';
      this.file = file;
    }
  }

  capture() {
    let thumbnail = <HTMLCanvasElement>document.getElementById('thumbnail');
    let video = <HTMLVideoElement>document.getElementById('video');

    let ctx = thumbnail.getContext('2d');
    thumbnail.width = 1920;
    thumbnail.height = 1080;
    thumbnail
      .getContext('2d')!
      .drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

    this.captureAndConvertToBlob(thumbnail);
  }

  captureAndConvertToBlob(canvas: HTMLElement) {
    let blob = new Blob(['hoge'], { type: 'image/png' });
    html2canvas(canvas).then((canvas) => {
      // Convert the canvas to a Blob
      canvas.toBlob((blobData) => {
        blob = blobData!;
        let formData = new FormData();
        formData.append('file', blobData!, 'file.png');

        const upload = this.http.post(
          'http://localhost:8080/stream_spring/api/video/uploadImage',
          formData
        );

        this.status = 'uploading';

        upload.subscribe({
          next: (data) => {
            this.status = 'success';
            this.videoPath = data.toString();
          },
          error: (error: any) => {
            if (error.error.text) {
              this.status = 'success';
              this.videoPath = error.error.text;
              console.log(this.videoPath);
              return;
            }

            this.status = 'fail';
            return throwError(() => error);
          },
        });
      });
    });
  }

  testButton() {
    const test = this.http.get(
      'http://localhost:8080/stream_spring/api/video/test'
    );
    test.subscribe();
  }

  onUpload() {
    if (this.file) {
      const formData = new FormData();

      formData.append('file', this.file, this.file.name);
      const upload = this.http.post(
        'http://localhost:8080/stream_spring/api/video/uploadVideo',
        formData
      );

      this.status = 'uploading';

      upload.subscribe({
        next: (data) => {
          this.status = 'success';
          this.videoPath = data.toString();
        },
        error: (error: any) => {
          if (error.error.text) {
            this.status = 'success';
            this.videoPath = error.error.text;
            console.log(this.videoPath);
            return;
          }

          this.status = 'fail';
          return throwError(() => error);
        },
      });
    }
  }
}
