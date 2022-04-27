import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCheckCircle, faClock, faTimesCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { CompaniesService } from 'src/app/services/companies.service';
import { OffersService } from 'src/app/services/offers.service';
import { ToastrService } from 'src/app/services/toastr.service';
import { Company } from 'src/core/models/company';
import { Offer } from 'src/core/models/offer';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-offer',
  templateUrl: './view-offer.component.html',
  styleUrls: ['./view-offer.component.css']
})
export class ViewOfferComponent implements OnInit {
  public readonly faCheckCircle = faCheckCircle;
  public readonly faTimesCircle = faTimesCircle;
  public readonly faClock = faClock;

  public offer: Offer;
  public company: Company;
  public companyLogoURL: string;
  public similarOffers = [
    { title: 'C# Developer', company: 'VERMEG Banking Services' },
    { title: 'Angular Developer', company: 'ACTIA Engineering Services' },
    { title: 'ReactJs Developer', company: 'Sofia Technologies' },
    { title: 'C# Developer', company: 'VERMEG Banking Services' },
    { title: 'Angular Developer', company: 'ACTIA Engineering Services' },
    { title: 'ReactJs Developer', company: 'Sofia Technologies' }
  ];

  constructor(private router: Router, private toastrService: ToastrService, private route: ActivatedRoute, private offersService: OffersService, private companiesService: CompaniesService) {}

  ngOnInit(): void {
    this.offersService.getOffer(this.route.snapshot.params['id']).subscribe(offer => {
      this.offer = offer;

      this.companiesService.getCompany(offer.companyId).subscribe(company => {
        this.company = company;
        this.companyLogoURL = `${environment.apiUrl}/companies/${this.company.id}/photo`;
      },
      _ => {
        this.router.navigate(['']);
        this.toastrService.showErrorToast('Loading Failed', 'Could Not Load Offer! Please Try Again.');
      });
    },
    _ => {
      this.router.navigate(['']);
      this.toastrService.showErrorToast('Loading Failed', 'Could Not Load Offer! Please Try Again.');
    });
  }
}
