import { Component, OnInit } from '@angular/core';
import { faAt, faBuilding, faCamera, faFileInvoice, faIdCardAlt, faInfoCircle, faLock, faMapMarkedAlt, faPhoneAlt, faTag, faUpload, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    trigger('companySlideAnimation', [
      state(
        'slideOut',
        style({ transform: 'translateX(-100%)', opacity: '0.0' })
      ),
      transition('* => slideOut', [animate('0.2s ease-in')]),
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: '0.0' }),
        animate('0.2s ease-out'),
      ]),
    ]),
    trigger('candidateSlideAnimation', [
      state(
        'slideOut',
        style({ transform: 'translateX(100%)', opacity: '0.0' })
      ),
      transition('* => slideOut', [animate('0.2s ease-in')]),
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: '0.0' }),
        animate('0.2s ease-out'),
      ]),
    ]),
  ],
})
export class RegisterComponent implements OnInit {
  registerCompany: boolean = true;
  registerCompanySlideOutAnimation: boolean = false;
  registerCandidateSlideOutAnimation: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  setCompanyRegisterMode() {
    this.registerCandidateSlideOutAnimation = true;
  }

  setCandidateRegisterMode() {
    this.registerCompanySlideOutAnimation = true;
  }

  slideOutAnimationDone(event: AnimationEvent) {
    if (event.toState === 'slideOut') {
      this.registerCompany = !this.registerCompany;
    }
    this.registerCompanySlideOutAnimation = false;
    this.registerCandidateSlideOutAnimation = false;
  }
}
