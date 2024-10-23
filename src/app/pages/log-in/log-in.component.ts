import { Component } from '@angular/core';
import { iLoginRequest } from '../../modules/i-login-request';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss',
})
export class LogInComponent {
  form: iLoginRequest = {
    email: '',
    password: '',
  };
  constructor(private authServ: AuthService, private router: Router) {}

  login() {
    this.authServ.login(this.form).subscribe((data) => {
      this.router.navigate(['/home']);
    });
  }
}
