import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css'],
})
export class AddOfferComponent implements OnInit {
  steps: MenuItem[];

  ngOnInit(): void {
    this.steps = [
      { label: 'Job Description' },
      { label: 'Profile Details' },
      { label: 'Preview' },
    ];
  }
}
