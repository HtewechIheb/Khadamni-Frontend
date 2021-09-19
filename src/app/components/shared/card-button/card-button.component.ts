import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.css']
})
export class CardButtonComponent implements OnInit {
  @Input() title: string;
  @Input() subTitle: string;
  @Input() image: string;

  constructor() { }

  ngOnInit(): void {
  }

}
