import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faAt, faFileInvoice, faScroll, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-application-dialog',
  templateUrl: './application-dialog.component.html',
  styleUrls: ['./application-dialog.component.css'],
  animations: [
    trigger('slideInAnimation', [
      state(
        'slideUp',
        style({ transform: 'translateY(-100%)', opacity: '0.0' })
      ),
      transition('* => slideUp', [animate('0.5s ease-in')]),
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: '0.0' }),
        animate('0.5s ease-out'),
      ]),
    ]),
  ],
})
export class ApplicationDialogComponent implements OnInit {
  faUser = faUser;
  faAt = faAt;
  faScroll = faScroll;
  faFileInvoice = faFileInvoice;
  faTimes = faTimes;
  shown: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  close(){
    this.shown = !this.shown;
  }
}
