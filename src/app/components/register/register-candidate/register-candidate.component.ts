import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { faBuilding, faAt, faLock, faPhoneAlt, faMapMarkedAlt, faUpload, faTag, faVenusMars, faIdCardAlt, faFileInvoice, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

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
  public submitted: boolean;
  public loading: boolean;

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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: [''],
      address: ['', Validators.required],
      birthdate: ['', Validators.required],
      gender: ['', Validators.required],
      tos: ['', [Validators.required, Validators.pattern(/true/)]],
      resumeFile: ['', Validators.required],
      contactNumber: [''],
      photoFile: ['']
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

    if(!this.form.valid){
      this.loading = false;
      return;
    }
    console.log(this.form);
  }
}
