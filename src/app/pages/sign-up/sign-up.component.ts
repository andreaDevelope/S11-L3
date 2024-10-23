import { Component } from '@angular/core';
import { iUser } from '../../modules/i-user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  form: Partial<iUser> = {};

  constructor(private authSer: AuthService, private router: Router) {}

  signup() {
    this.authSer.register(this.form).subscribe((res) => {
      this.router.navigate(['/log-in']);
    });
  }
}
