import { Component, OnInit } from '@angular/core';
import { faAt, faBuilding, faCamera, faFileInvoice, faIdCardAlt, faInfoCircle, faLock, faMapMarkedAlt, faPhoneAlt, faTag, faUpload, faVenusMars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  faBuilding = faBuilding;
  faAt = faAt;
  faLock = faLock;
  faPhoneAlt = faPhoneAlt;
  faMapMarkedAlt = faMapMarkedAlt;
  faUpload = faUpload;
  faInfoCircle = faInfoCircle;
  faTag = faTag;
  faVenusMars = faVenusMars;
  faIdCardAlt = faIdCardAlt;
  faFileInvoice = faFileInvoice;
  registerCompany: boolean = true;

  tos: boolean = false;
  gender: string;

  constructor() {}

  ngOnInit(): void {}

  switchRegisterMode(){
    this.registerCompany = !this.registerCompany;
  }
}
