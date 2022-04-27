import { Component, OnDestroy, OnInit } from '@angular/core';
import { faBell, faEnvelope, faUser, faAngleDown, faSignIn, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { Candidate } from 'src/core/models/candidate';
import { Company } from 'src/core/models/company';
import { User } from 'src/core/models/user';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public readonly faAngleDown = faAngleDown;
  public readonly faBell = faBell;
  public readonly faEnvelope = faEnvelope;
  public readonly faUser = faUser;
  public readonly faSignIn = faSignIn;
  public readonly faBriefcase = faBriefcase;

  public user: User;
  public userSubscription: Subscription;

  get userName(): string {
    if(!this.user) {
      return null;
    }

    if(this.user.type === 'candidate') {
      const candidateInfo = this.user.info as Candidate;
      return `${candidateInfo.firstName} ${candidateInfo.lastName}`;
    }
    if(this.user.type === 'company') {
      const companyInfo = this.user.info as Company;
      return companyInfo.name;
    }
  }

  public userMenu: MenuItem[];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe(user => {
      this.user = user;
    });

    this.userMenu = [
      { label: 'Dashboard', icon: 'pi pi-chart-bar', routerLink: ['/dashboard'] },
      { label: 'Logout', icon: 'pi pi-sign-out', command: (event) => {
        this.authService.logout();
        this.router.navigate(['']);
      }}
    ]
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
