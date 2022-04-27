import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { faBuilding, faClock, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { Company } from 'src/core/models/company';
import { Offer } from 'src/core/models/offer';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent {
  @Input() offer: Offer;
  @Input() company: Company;
  @Input() companyLogoURL: string;

  public readonly faClock = faClock;
  public readonly faBuilding = faBuilding;
  public readonly faMapMarkedAlt = faMapMarkedAlt;

  constructor() { }
}
