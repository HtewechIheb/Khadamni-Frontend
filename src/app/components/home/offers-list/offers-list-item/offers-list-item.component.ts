import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers-list-item',
  templateUrl: './offers-list-item.component.html',
  styleUrls: ['./offers-list-item.component.css']
})
export class OfferItemComponent implements OnInit {
  @Input() title: string;
  @Input() company: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
