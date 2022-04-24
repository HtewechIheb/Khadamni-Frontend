import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public readonly faAt = faAt;
  public readonly faLock = faLock;

  public form: FormGroup;
  public submitted: boolean = false;
  public loading: boolean = false;

  get formControls(){
    return this.form.controls;
  }

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private toastrService: ToastrService, private router: Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      rememberMe: [null]
    })

    console.log(this.submitted && this.formControls.email.errors);
  }


  onSubmit(): void {
    this.submitted = true;

    if(this.form.valid){
      this.loading = true;

      const data = {
        email: this.form.value.email,
        password: this.form.value.password
      }

      this.authService.login(data).subscribe(_ => {
        this.loading = false;
        this.toastrService.showSuccessToast('Login Successful', 'Welcome Back To Khadamni!');
        this.router.navigate(['']);
      }, _ => {
        this.loading = false;
        this.toastrService.showErrorToast('Login Failed', 'Authentication Failed! Please Try Again.');
      })
    }
  }
}
