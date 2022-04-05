import { Component, OnInit } from '@angular/core';
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  faAt = faAt;
  faLock = faLock;
}
