import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-thumbnail',
  templateUrl: './company-thumbnail.component.html',
  styleUrls: ['./company-thumbnail.component.css']
})
export class CompanyThumbnailComponent implements OnInit {
  @Input() name: string;
  @Input() offers: number;

  constructor() { }

  ngOnInit(): void {
  }

}
