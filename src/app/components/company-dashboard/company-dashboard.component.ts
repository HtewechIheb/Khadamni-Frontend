import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlassPlus, faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { OffersService } from 'src/app/services/offers.service';
import { ToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit {
  public readonly faPen = faPen;
  public readonly faTrash = faTrash;
  public readonly faPlus = faPlus;
  public readonly faMagnifyingGlassPlus = faMagnifyingGlassPlus;

  public offers = [];

  constructor(private offersService: OffersService, private authService: AuthService, private toastrService: ToastrService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.offersService.getOffersByCompany(this.authService.userValue.id).subscribe(offers => {
      this.offers = offers.map(offer => ({...offer, applications: Math.floor(Math.random() * 10), status: Math.random() > 5 ? 'open' : 'closed' }));
    },
    _ => {
      this.toastrService.showErrorToast('Loading Failed!', 'Could Not Load Offers.');
    });
  }

  deleteOfferPopup(id: number): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this offer ?',
      accept: () => {
        this.deleteOffer(id);
      }
    });
  }

  deleteOffer(id: number): void {
    this.offersService.deleteOffer(id).subscribe(_ => {
      this.offers = this.offers.filter(offers => offers.id !== id);
      this.toastrService.showSuccessToast('Deletion Successful!', 'Offer Was Successfully Deleted.');
    },
    _ => {
      this.toastrService.showSuccessToast('Deletion Failed!', 'Error Occurred While Deleting Offer.');
    });
  }
}
