import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponse } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginSelected: boolean;
  loading: boolean;
  error: string;
  authObserver: Observable<AuthResponse>;

  constructor(private authService: AuthService, private router: Router) {
    this.loginSelected = true; // Login page is set by default
    this.loading = false;
    this.error = null;
   }

  swapMode(){
     this.loginSelected = !this.loginSelected;
   }

  ngOnInit() {
  }

  processAuthRequest(loginData: NgForm){
    console.log(`Form submitted w/: ${JSON.stringify(loginData.value)}`);
    if (loginData.valid && this.loginSelected == false){
      let email = loginData.value.email;
      let pass = loginData.value.password;
      this.loading = true;
      this.authObserver = this.authService.register(email,pass);
    }else if (loginData.valid && this.loginSelected){
      let email = loginData.value.email;
      let pass = loginData.value.password;
      this.loading = true;
      this.authObserver = this.authService.login(email,pass);
    }
    
    this.authObserver.subscribe(
      response => {
        console.log('Success!');
        console.log(response);
        this.loading = false;
        this.error = null;
        this.router.navigate(['/recipes']);
      },
      errMessage => {
        this.loading = false;
        this.error = errMessage;
      }
    );
    loginData.reset();
  }

  resolveError(){
    this.error = null;
  }

}
