import { Component, Input, OnInit } from '@angular/core';
import { faBuilding, faClock, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {
  @Input() preview: boolean;

  faClock = faClock;
  faBuilding = faBuilding;
  faMapMarkedAlt = faMapMarkedAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
