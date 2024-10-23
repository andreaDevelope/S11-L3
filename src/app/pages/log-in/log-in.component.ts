import { AuthGuard } from './../../guards/auth.guard';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss',
})
export class LogInComponent {
  isLog: boolean = false;
  constructor(private authGuard: AuthGuard) {}

  ngOnInit() {}

  auth() {
    this.authGuard.auth();
    this.isLog = true;
    console.log(this.isLog);
  }
}
