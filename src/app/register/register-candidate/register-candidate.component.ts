import { Component, OnInit } from '@angular/core';
import { faBuilding, faAt, faLock, faPhoneAlt, faMapMarkedAlt, faUpload, faInfoCircle, faTag, faVenusMars, faIdCardAlt, faFileInvoice, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register-candidate',
  templateUrl: './register-candidate.component.html',
  styleUrls: ['./register-candidate.component.css'],
})
export class RegisterCandidateComponent implements OnInit {
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
  faCalendarAlt = faCalendarAlt;

  tos: boolean = false;
  gender: string;

  constructor() {}

  ngOnInit(): void {}
}
