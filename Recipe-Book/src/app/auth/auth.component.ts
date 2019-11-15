import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginSelected: boolean;

  constructor() {
    this.loginSelected = true; // Login page is set by defaul
   }

   swapMode(){
     this.loginSelected = !this.loginSelected;
   }

  ngOnInit() {
  }

}
