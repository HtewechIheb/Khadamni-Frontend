import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyGuard } from './auth/company.guard';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { AddOfferComponent } from './components/add-offer/add-offer.component';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'accessdenied', component: AccessDeniedComponent },
  {
    path: 'auth', children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  { path: 'offers/new', component: AddOfferComponent, canActivate: [CompanyGuard] },
  { path: 'dashboard', component: CompanyDashboardComponent, canActivate: [CompanyGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
