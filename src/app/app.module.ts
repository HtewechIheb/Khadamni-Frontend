import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { RegisterComponent } from './register/register.component';
import { RegisterCandidateComponent } from './register/register-candidate/register-candidate.component';
import { RegisterCompanyComponent } from './register/register-company/register-company.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { JobDescriptionFormComponent } from './add-offer/job-description-form/job-description-form.component';
import { ProfileDetailsFormComponent } from './add-offer/profile-details-form/profile-details-form.component';

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
    JobDescriptionFormComponent,
    ProfileDetailsFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimeNGModule,
    FontAwesomeModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
