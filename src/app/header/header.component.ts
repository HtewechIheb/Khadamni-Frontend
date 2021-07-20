import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[];
  public scrolled: boolean = false;

  @HostListener('window:scroll', ['$event']) onPageScroll(event){
    this.scrolled = window.pageYOffset >= 50;
  }

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Job Offers',
      },
      {
        label: 'Companies',
      },
      {
        label: 'Contact Us',
      },
      {
        label: 'About Us'
      }
    ];
  }
}
