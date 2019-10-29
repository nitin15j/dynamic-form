import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  
  loggedIn = new BehaviorSubject<boolean>(false);
  
  constructor(private router: Router ) {}

  login(): void {
    this.router.navigate([`services`]);
    this.loggedIn.next(true);
  }

  isLoggedIn(){
    return true;
  }

}
