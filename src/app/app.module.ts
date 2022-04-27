import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CardButtonComponent } from './components/shared/card-button/card-button.component';
import { CompanyThumbnailComponent } from './components/shared/company-thumbnail/company-thumbnail.component';
import { OfferItemComponent } from './components/home/offers-list/offers-list-item/offers-list-item.component';
import { OffersListComponent } from './components/home/offers-list/offers-list.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterCandidateComponent } from './components/register/register-candidate/register-candidate.component';
import { RegisterCompanyComponent } from './components/register/register-company/register-company.component';
import { AddOfferComponent } from './components/add-offer/add-offer.component';
import { OfferDetailsComponent } from './components/shared/offer-details/offer-details.component';
import { ViewOfferComponent } from './components/view-offer/view-offer.component';
import { ViewOffersComponent } from './view-offers/view-offers.component';
import { LoginComponent } from './components/login/login.component';
import { ApplicationDialogComponent } from './components/shared/application-dialog/application-dialog.component';
import { UnauthorizedInterceptor } from './services/unauthorized-interceptor.service';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastrService } from './services/toastr.service';
import { EditOfferComponent } from './components/edit-offer/edit-offer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardButtonComponent,
    CompanyThumbnailComponent,
    OfferItemComponent,
    OffersListComponent,
    HomeComponent,
    RegisterComponent,
    RegisterCandidateComponent,
    RegisterCompanyComponent,
    AddOfferComponent,
    OfferDetailsComponent,
    ViewOfferComponent,
    ViewOffersComponent,
    LoginComponent,
    ApplicationDialogComponent,
    CompanyDashboardComponent,
    AccessDeniedComponent,
    EditOfferComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimeNGModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
        allowedDomains: ['localhost:8080'],
        disallowedRoutes: ['http://localhost:8080/api/auth/login', 'http://localhost:8080/api/auth/register', 'http://localhost:8080/api/auth/refreshtoken']
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    },
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
