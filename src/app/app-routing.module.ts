import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyGuard } from './auth/company.guard';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { AddOfferComponent } from './components/add-offer/add-offer.component';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { EditOfferComponent } from './components/edit-offer/edit-offer.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewOfferComponent } from './components/view-offer/view-offer.component';
import { ViewOffersComponent } from './view-offers/view-offers.component';

const routes: Routes = [
  { path: '', component: ViewOffersComponent },
  { path: 'accessdenied', component: AccessDeniedComponent },
  {
    path: 'auth', children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  { path: 'offers/new', component: AddOfferComponent, canActivate: [CompanyGuard] },
  { path: 'offers/:id', component: ViewOfferComponent },
  { path: 'offers/:id/edit', component: EditOfferComponent, canActivate: [CompanyGuard] },
  { path: 'dashboard', component: CompanyDashboardComponent, canActivate: [CompanyGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
