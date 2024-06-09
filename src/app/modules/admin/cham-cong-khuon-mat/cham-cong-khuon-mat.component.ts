import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamModule, WebcamUtil } from 'ngx-webcam';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CheckInDialogComponent } from '../check-in-dialog/check-in-dialog.component';

@Component({
  selector: 'app-face-check-in',
  templateUrl: './cham-cong-khuon-mat.component.html',
  imports: [CommonModule, WebcamModule],
  standalone: true,
})
export class ChamCongKhuonMatComponent implements OnInit {
  // Webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // Latest snapshot
  public webcamImage: WebcamImage | undefined;

  // Flag to indicate if the webcam is available
  public showWebcam = true;
  public errors: WebcamInitError[] = [];

  constructor(private http: HttpClient,  private dialog: MatDialog) {}

  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        if (mediaDevices && mediaDevices.length > 0) {
          this.showWebcam = true;
        } else {
          this.showWebcam = false;
          alert('No webcam available');
        }
      });
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;  
    this.checkInWithFace(webcamImage.imageAsBase64);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  private checkInWithFace(imageBase64: string): void {
    const apiUrl = 'https://localhost:7181/api/FaceRecognition/checkin'; // Replace with your API endpoint
    this.http.post<any>(apiUrl, { image: imageBase64 }).subscribe(
      response => {
        this.openDialog(`${response.message} Đã chấm công thành công !`, true);
      },
      error => {
        this.openDialog('Chấm công thất bại!', false);
      }
    );
  }

  private openDialog(message: string, isSuccess: boolean): void {
    this.dialog.open(CheckInDialogComponent, {
      data: { message, isSuccess }
    });
  }
}
