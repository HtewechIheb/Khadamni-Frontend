import { Component, OnInit } from '@angular/core';
import { faCheckCircle, faClock, faTimesCircle, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-offer',
  templateUrl: './view-offer.component.html',
  styleUrls: ['./view-offer.component.css']
})
export class ViewOfferComponent implements OnInit {
  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;
  faClock = faClock;

  constructor() { }

  ngOnInit(): void {
  }

}
