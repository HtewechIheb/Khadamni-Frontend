import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { faBuilding, faAt, faLock, faPhoneAlt, faMapMarkedAlt, faUpload, faInfoCircle, faTag } from '@fortawesome/free-solid-svg-icons';

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
  public submitted: boolean;
  public loading: boolean;
  @ViewChild('uploadLogoElement') uploadLogoElement: ElementRef;

  get formControls() {
    return this.form.controls;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: [''],
      address: ['', Validators.required],
      description: ['', Validators.required],
      tos: ['', [Validators.required, Validators.pattern(/true/)]],
      contactNumber: [''],
      category: [''],
      logoFile: ['']
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

    if(!this.form.valid){
      this.loading = false;
      return;
    }

    console.log(this.form);
  }
}
