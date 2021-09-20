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
    RegisterCompanyComponent
  ],
  imports: [
    BrowserModule,
    PrimeNGModule,
    FontAwesomeModule,
    FormsModule
    //AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
