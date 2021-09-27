import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBuilding, faAt, faLock, faPhoneAlt, faMapMarkedAlt, faUpload, faInfoCircle, faTag, faVenusMars, faIdCardAlt, faFileInvoice, faIndustry, faFileSignature, faUserFriends, faFistRaised } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css'],
})
export class AddOfferComponent implements OnInit {
  faBuilding = faBuilding;
  faIndustry = faIndustry;
  faLock = faLock;
  faFileSignature = faFileSignature;
  faMapMarkedAlt = faMapMarkedAlt;
  faUserFriends = faUserFriends;
  faInfoCircle = faInfoCircle;
  faTag = faTag;
  faVenusMars = faVenusMars;
  faIdCardAlt = faIdCardAlt;
  faFistRaised = faFistRaised;

  steps: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.steps = [
      { label: 'Job Description' },
      { label: 'Profile Details' },
      { label: 'Preview' },
    ];
  }
}
