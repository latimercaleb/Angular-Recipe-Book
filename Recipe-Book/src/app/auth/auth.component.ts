import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginSelected: boolean;

  constructor(private authService: AuthServiceService) {
    this.loginSelected = true; // Login page is set by default
   }

   swapMode(){
     this.loginSelected = !this.loginSelected;
   }

  ngOnInit() {
  }

  processAuthRequest(loginData: NgForm){
    console.log(`Form submitted w/: ${JSON.stringify(loginData.value)}`);
    loginData.reset();
  }

}
