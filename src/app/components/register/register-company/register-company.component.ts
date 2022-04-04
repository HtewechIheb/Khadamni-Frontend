import { Component, ElementRef, ViewChild } from '@angular/core';
import { faBuilding, faAt, faLock, faPhoneAlt, faMapMarkedAlt, faUpload, faInfoCircle, faTag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css'],
})
export class RegisterCompanyComponent {
  public readonly faBuilding = faBuilding;
  public readonly faTag = faTag;
  public readonly faAt = faAt;
  public readonly faPhoneAlt = faPhoneAlt;
  public readonly faLock = faLock;
  public readonly faMapMarkedAlt = faMapMarkedAlt;
  public readonly faUpload = faUpload;
  public readonly faInfoCircle = faInfoCircle;

  public tos: boolean = false;
  public gender: string;

  @ViewChild('uploadLogoElement') uploadLogoElement: ElementRef;

  uploadLogo(): void {
    this.uploadLogoElement.nativeElement.click();
  }
}
