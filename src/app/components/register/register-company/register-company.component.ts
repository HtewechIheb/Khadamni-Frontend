import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faBuilding, faAt, faLock, faPhoneAlt, faMapMarkedAlt, faUpload, faInfoCircle, faTag } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css'],
})
export class RegisterCompanyComponent implements OnInit {
  public readonly faBuilding = faBuilding;
  public readonly faTag = faTag;
  public readonly faAt = faAt;
  public readonly faPhoneAlt = faPhoneAlt;
  public readonly faLock = faLock;
  public readonly faMapMarkedAlt = faMapMarkedAlt;
  public readonly faUpload = faUpload;
  public readonly faInfoCircle = faInfoCircle;

  public form: FormGroup;
  public submitted: boolean = false;
  public loading: boolean = false;

  @ViewChild('uploadLogoElement') uploadLogoElement: ElementRef;

  get formControls() {
    return this.form.controls;
  }

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private toastrService: ToastrService, private router: Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      confirmPassword: [null],
      address: [null, Validators.required],
      description: [null, Validators.required],
      tos: [null, [Validators.required, Validators.pattern(/true/)]],
      contactNumber: [null],
      category: [null],
      logoFile: [null]
    }, { validators: this.passwordsMatch });
  }

  private passwordsMatch(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password.value != confirmPassword.value ? { passwordsMatch: true } : null;
  }

  uploadLogo(): void {
    this.uploadLogoElement.nativeElement.click();
  }

  onSubmit(): void {
    this.submitted = true;
    this.loading = true;

    console.log(this.uploadLogoElement.nativeElement);

    if(this.form.valid){
      const data = {
        email: this.form.value.email,
        password: this.form.value.password,
        name: this.form.value.name,
        address: this.form.value.address,
        description: this.form.value.description,
        contactNumber: this.form.value.contactNumber,
        category: this.form.value.category,
        logoFile: this.uploadLogoElement.nativeElement.files[0]
      }

      this.authService.registerCompany(data).subscribe(_ => {
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
