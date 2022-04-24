import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faBuilding, faAt, faLock, faPhoneAlt, faMapMarkedAlt, faUpload, faTag, faVenusMars, faIdCardAlt, faFileInvoice, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-register-candidate',
  templateUrl: './register-candidate.component.html',
  styleUrls: ['./register-candidate.component.css'],
})
export class RegisterCandidateComponent implements OnInit {
  public readonly faBuilding = faBuilding;
  public readonly faAt = faAt;
  public readonly faTag = faTag;
  public readonly faPhoneAlt = faPhoneAlt;
  public readonly faLock = faLock;
  public readonly faMapMarkedAlt = faMapMarkedAlt;
  public readonly faUpload = faUpload;
  public readonly faVenusMars = faVenusMars;
  public readonly faIdCardAlt = faIdCardAlt;
  public readonly faFileInvoice = faFileInvoice;
  public readonly faCalendarAlt = faCalendarAlt;

  public form: FormGroup;
  public submitted: boolean = false;
  public loading: boolean = false;

  @ViewChild('uploadPhotoElement') uploadPhotoElement: ElementRef;
  @ViewChild('uploadResumeElement') uploadResumeElement: ElementRef;

  uploadPhoto(): void {
    this.uploadPhotoElement.nativeElement.click();
  }

  uploadResume(): void {
    this.uploadResumeElement.nativeElement.click();
  }

  get formControls() {
    return this.form.controls;
  }

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private toastrService: ToastrService, private router: Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      confirmPassword: [null],
      address: [null, Validators.required],
      birthdate: [null, Validators.required],
      gender: [null, Validators.required],
      tos: [null, [Validators.required, Validators.pattern(/true/)]],
      resumeFile: [null, Validators.required],
      contactNumber: [null],
      photoFile: [null]
    }, { validators: this.passwordsMatch });
  }

  private passwordsMatch(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password.value != confirmPassword.value ? { passwordsMatch: true } : null;
  }

  onSubmit(): void {
    this.submitted = true;
    this.loading = true;

    console.log(this.form);

    if(this.form.valid){
      const data = {
        email: this.form.value.email,
        password: this.form.value.password,
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        gender: this.form.value.gender,
        address: this.form.value.address,
        birthdate: this.form.value.birthdate,
        resumeFile: this.uploadResumeElement.nativeElement.files[0],
        photoFile: this.uploadPhotoElement.nativeElement.files[0]
      }

      this.authService.registerCandidate(data).subscribe(_ => {
        this.loading = false;
        this.toastrService.showSuccessToast('Registeration Successful', 'Welcome To Khadamni!');
        this.router.navigate(['']);
      }, _ => {
        this.loading = false;
        this.toastrService.showErrorToast('Registeration Failed', 'Account Creation Failed! Please Try Again.');
      });
    }
    else {
      this.loading = false;
    }
  }
}
