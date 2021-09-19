import { Component, HostListener, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  companies: Array<any>;
  responsiveOptions: Array<any>;
  mobileNavigator: boolean;
  @HostListener('window:resize', ['$event']) onResize(event: Event){
    this.mobileNavigator = visualViewport.width < 576;
  }

  constructor(private primeNgConfig: PrimeNGConfig) {
    this.mobileNavigator = visualViewport.width < 576;
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    this.companies = [{}, {}, {}, {}, {}, {}, {}, {}];
  }
}
