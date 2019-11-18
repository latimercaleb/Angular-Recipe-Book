import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface AuthResponse {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(email: string, pass: string){
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDRou91UtXy0Lb_PPU8BOFvjId4d_lKyMs', {email: email, password: pass, returnSecureToken: true}).pipe(catchError(
      errorObject => {
        console.log('Error has occured');
        let returnErrorMessage = 'An undefined error has occured!';
        if (!errorObject.error || !errorObject.error.error){
          return throwError(returnErrorMessage);
        }else{
          switch(errorObject.error.error.message){
            case 'EMAIL_EXISTS':
              returnErrorMessage = `Error: ${errorObject.error.error.code} due to an email existing already`;
          }
          return throwError(returnErrorMessage); 
        }
        
      }

    ));
  }

  login(){

  }

  logout(){

  }
}
