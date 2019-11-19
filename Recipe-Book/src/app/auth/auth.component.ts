import { Component, OnInit, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponse } from './auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  loginSelected: boolean;
  loading: boolean;
  error: string;
  authObserver: Observable<AuthResponse>;
  @ViewChild(PlaceholderDirective) alertWrapper: PlaceholderDirective;
  private closeErrorAlert: Subscription;

  constructor(private authService: AuthService, private router: Router, private cmpFactResolver: ComponentFactoryResolver) {
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
        this.showErrAlert(errMessage); // Programatic approach
      }
    );
    loginData.reset();
  }

  resolveError(){
    this.error = null;
  }

  private showErrAlert(errorString: string){
    // const alrtCmp = new AlertComponent(); // This makes a new JS object, but not an Angular component, the fix? Allow angular to create it with component factory
    const alertFactory = this.cmpFactResolver.resolveComponentFactory(AlertComponent);
    const viewContainer = this.alertWrapper.viewContainerRef;
    viewContainer.clear();
    const newComponentRefference = viewContainer.createComponent(alertFactory);
    newComponentRefference.instance.message = errorString;
    this.closeErrorAlert = newComponentRefference.instance.closeAlert.subscribe(
      () => {
        this.closeErrorAlert.unsubscribe();
        viewContainer.clear();
      });
  }

  ngOnDestroy(){
    if(this.closeErrorAlert){
      this.closeErrorAlert.unsubscribe();
    }
  }

}
