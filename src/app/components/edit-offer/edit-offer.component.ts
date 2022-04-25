import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faVenusMars, faFistRaised, faGraduationCap, faBusinessTime, faTag, faIndustry, faFileSignature, faUserFriends, faInfoCircle, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { OffersService } from 'src/app/services/offers.service';
import { ToastrService } from 'src/app/services/toastr.service';
import { Offer } from 'src/core/models/offer';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.css']
})
export class EditOfferComponent implements OnInit {
  public readonly faVenusMars = faVenusMars;
  public readonly faFistRaised = faFistRaised;
  public readonly faGraduationCap = faGraduationCap;
  public readonly faBusinessTime = faBusinessTime;
  public readonly faTag = faTag;
  public readonly faIndustry = faIndustry;
  public readonly faFileSignature = faFileSignature;
  public readonly faUserFriends = faUserFriends;
  public readonly faInfoCircle = faInfoCircle;
  public readonly faSackDollar = faSackDollar;

  public readonly industries: { name: string }[] = [
    { name: 'Information Technology' },
    { name: 'Education' },
    { name: 'Healthcare' },
    { name: 'Engineering' },
    { name: 'Commerce' },
  ];

  public readonly degrees: { name: string }[] = [
    { name: 'Bachelor\'s' },
    { name: 'Engineering' },
    { name: 'Masters' },
    { name: 'PhD' },
  ];

  public readonly employmentTypes: { name: string }[] = [
    { name: 'CDI' },
    { name: 'CDD' },
    { name: 'SIVP' },
    { name: 'Freelance' },
  ];

  public gender = "male";
  public selectedDegree: string;
  public skills: string[] = ['Web Development', 'UI/UX'];
  public skillsCount = 2;
  public readonly maxSkillsCount = 5;

  public form: FormGroup;
  public submitted: boolean = false;
  public loading: boolean = false;

  public offer: Offer;

  public get formControls() {
    return this.form.controls;
  }

  constructor(private formBuilder: FormBuilder, private offersService: OffersService, private toastrService: ToastrService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [null],
      industry: [null],
      type: [null],
      description: [null],
      gender: [null],
      minimumExperience: [null],
      recommendedExperience: [null],
      spots: [null],
      salary: [null],
      degree: [null]
    });

    this.offersService.getOffer(Number(this.route.snapshot.params["id"])).subscribe(offer => {
      console.log(offer);
      this.offer = offer;

      this.form.setValue({
        title: this.offer.title,
        industry: this.offer.industry,
        type: this.offer.type,
        description: this.offer.description,
        gender: this.offer.gender,
        minimumExperience: this.offer.minimumExperience,
        recommendedExperience: this.offer.recommendedExperience,
        spots: this.offer.spots,
        salary: this.offer.salary,
        degree: this.offer.degree
      })

      this.skills = this.offer.skills;
    },
    _ => {
      this.router.navigate(['dashboard']);
      this.toastrService.showErrorToast('Loading Failed', 'Could Not Load Offer! Please Try Again.');
    });
  }

  public addSkill(input: HTMLInputElement): void {
    const inputValue = input.value.trim();

    if (inputValue.length > 0) {
      this.skills.push(inputValue);
      this.skillsCount++;
      input.value = null;
    }
  }

  public removeSkill(index: number): void {
    this.skills.splice(index, 1);
    this.skillsCount--;
  }

  onSubmit(): void {
    this.submitted = true;
    this.loading = true;

    if(this.form.valid){
      const data = {
        title: this.form.value.title,
        industry: this.form.value.industry,
        type: this.form.value.type,
        description: this.form.value.description,
        gender: this.form.value.gender,
        minimumExperience: this.form.value.minimumExperience,
        recommendedExperience: this.form.value.recommendedExperience,
        spots: this.form.value.spots,
        salary: this.form.value.salary,
        degree: this.form.value.degree,
        skills: this.skills
      }

      this.offersService.editOffer(this.offer.id, data).subscribe(_ => {
        this.loading = false;
        this.toastrService.showSuccessToast('Update Successful', 'Offer Was Successfully updated!');
        this.router.navigate(['']);
      }, _ => {
        this.loading = false;
        this.toastrService.showErrorToast('Update Failed', 'Could Not Update Offer! Please Try Again.');
      });
    }
    else {
      this.loading = false;
    }
  }
}
