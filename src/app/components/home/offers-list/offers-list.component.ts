import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {
  @Input() items: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
