import { Component, Input, OnInit } from '@angular/core';
import { faClock, faBuilding, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-offers-list-item',
  templateUrl: './offers-list-item.component.html',
  styleUrls: ['./offers-list-item.component.css'],
})
export class OfferItemComponent implements OnInit {
  @Input() title: string;
  @Input() company: string;
  @Input() description: string;
  @Input() descriptionLength: number;
  @Input() logo: string;
  faClock = faClock;
  faBuilding = faBuilding;
  faMapMarkedAlt = faMapMarkedAlt;

  constructor() {}

  ngOnInit(): void {}
}
