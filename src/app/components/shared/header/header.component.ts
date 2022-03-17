import { Component, OnInit } from '@angular/core';
import { faBell, faEnvelope, faUser, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[];
  public scrolled: boolean = false;
  faUserTie = faUserTie;
  faBell = faBell;
  faEnvelope = faEnvelope;
  faUser = faUser;

  constructor() { }

  ngOnInit(): void {
  }
}
