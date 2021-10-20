import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faBuilding, faAt, faLock, faPhoneAlt, faMapMarkedAlt, faUpload, faInfoCircle, faTag, faVenusMars, faIdCardAlt, faFileInvoice } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css'],
})
export class RegisterCompanyComponent implements OnInit {
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

  tos: boolean = false;
  gender: string;

  constructor() {}

  ngOnInit(): void {}
}
