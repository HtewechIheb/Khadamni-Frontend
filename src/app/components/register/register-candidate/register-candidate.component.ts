import { Component, ElementRef, ViewChild } from '@angular/core';
import { faBuilding, faAt, faLock, faPhoneAlt, faMapMarkedAlt, faUpload, faTag, faVenusMars, faIdCardAlt, faFileInvoice, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register-candidate',
  templateUrl: './register-candidate.component.html',
  styleUrls: ['./register-candidate.component.css'],
})
export class RegisterCandidateComponent {
  public readonly faBuilding = faBuilding;
  public readonly faAt = faAt;
  public readonly faTag = faTag;
  public readonly faPhoneAlt = faPhoneAlt;
  public readonly faLock = faLock;
  public readonly faMapMarkedAlt = faMapMarkedAlt;
  public readonly faUpload = faUpload;
  public readonly faVenusMars = faVenusMars;
  public readonly faIdCardAlt = faIdCardAlt;
  public readonly faFileInvoice = faFileInvoice;
  public readonly faCalendarAlt = faCalendarAlt;

  public tos: boolean = false;
  public gender: string;

  @ViewChild('uploadPhotoElement') uploadPhotoElement: ElementRef;
  @ViewChild('uploadResumeElement') uploadResumeElement: ElementRef;

  uploadPhoto(): void {
    this.uploadPhotoElement.nativeElement.click();
  }

  uploadResume(): void {
    this.uploadResumeElement.nativeElement.click();
  }
}
