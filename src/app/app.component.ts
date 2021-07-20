import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'Project-X-Front';

  constructor(private primeNgConfig: PrimeNGConfig){ }

  ngOnInit(): void {
    this.primeNgConfig.ripple = true;
  }
}
