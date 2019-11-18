import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginSelected: boolean;
  loading: boolean;
  error: string;
  constructor(private authService: AuthService) {
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
      this.authService.register(email,pass).subscribe(
        response => {
          console.log(response);
          this.loading = false;
        },
        errMessage => {
          this.loading = false;
          this.error = errMessage;
        }
      );
    }
    loginData.reset();
  }

}
