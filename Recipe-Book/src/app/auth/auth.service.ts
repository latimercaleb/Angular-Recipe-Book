import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { User } from './user.model';

export interface AuthResponse {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient) { }

  register(email: string, pass: string){
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDRou91UtXy0Lb_PPU8BOFvjId4d_lKyMs', 
    {email: email, password: pass, returnSecureToken: true})
    .pipe(catchError(this.customErrorHandler), 
      tap(responseData => {
        this.authenticate(
          responseData.email, 
          responseData.localId,
          responseData.idToken,
          parseInt(responseData.expiresIn)
          );
    }));
  }

  login(email: string, pass: string){
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDRou91UtXy0Lb_PPU8BOFvjId4d_lKyMs',
    {email: email, password: pass, returnSecureToken: true})
    .pipe(catchError(this.customErrorHandler), 
      tap(responseData => {
          this.authenticate(
            responseData.email, 
            responseData.localId,
            responseData.idToken,
            parseInt(responseData.expiresIn)
          );
        })
    );
  }

  logout(){

  }

  private authenticate(email: string, localId: string, idToken: string, expires: number){
    const expiresIn = new Date(
      new Date().getTime() + expires * 1000
    );
    const user = new User(
      email, 
      localId, 
      idToken, 
      expiresIn
    );
    this.user.next(user); 
  }

  private customErrorHandler(errorObject: HttpErrorResponse){
    console.log('Error has occured');
    console.log(errorObject);
    let returnErrorMessage = 'An undefined error has occured!';
    if (!errorObject.error || !errorObject.error.error){
      return throwError(returnErrorMessage);
    }else{
      switch(errorObject.error.error.message){
        case 'EMAIL_NOT_FOUND':
          returnErrorMessage = `Error: ${errorObject.error.error.code} due to no email being present`;
          break;
        case 'INVALID_PASSWORD':
          returnErrorMessage = `Error: ${errorObject.error.error.code} due to an invalid password`;
          break;
        case 'USER_DISABLED':
          returnErrorMessage = `Error: ${errorObject.error.error.code} due to being disabled`;
          break;
        case 'EMAIL_EXISTS':
          returnErrorMessage = `Error: ${errorObject.error.error.code} due to an email existing already`;
          break;
      }
      return throwError(returnErrorMessage); 
    }
  }
}
