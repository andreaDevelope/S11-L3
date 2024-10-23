import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  islog: boolean = false;

  auth() {
    return !this.islog;
  }
}
