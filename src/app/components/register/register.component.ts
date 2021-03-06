import { Component, OnInit } from '@angular/core';
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
        style({ transform: 'translateX(-100%)', opacity: '0.0' }), // The element starts in this state and transitions to its default initial state
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
        style({ transform: 'translateX(100%)', opacity: '0.0' }), // The element starts in this state and transitions to its default initial state
        animate('0.2s ease-out'),
      ]),
    ]),
  ],
})
export class RegisterComponent {
  public registerCompany: boolean = true;
  public registerCompanySlideOutAnimation: boolean = false;
  public registerCandidateSlideOutAnimation: boolean = false;

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
