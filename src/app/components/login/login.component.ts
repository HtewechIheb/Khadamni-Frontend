import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private messageService: MessageService, private router: Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: ['']
    })

    console.log(this.submitted && this.formControls.email.errors);
  }


  onSubmit(): void {
    this.submitted = true;
    this.loading = true;

    if(this.form.valid){
      const data = {
        email: this.form.value.email,
        password: this.form.value.password
      }

      this.authService.login(data).subscribe(_ => {
        this.loading = false;
        this.showSuccess();
        this.router.navigate(['']);
      }, _ => {
        this.loading = false;
      })
    }
    else {
      this.loading = false;
    }
  }

  showSuccess(){
    this.messageService.add({ severity: 'success', summary: 'Login Successful', detail: 'Welcome Back!', sticky: true })
  }
}
