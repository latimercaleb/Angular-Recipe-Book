import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDRou91UtXy0Lb_PPU8BOFvjId4d_lKyMs', {email: email, password: pass, returnSecureToken: true});
  }

  login(){

  }

  logout(){

  }
}
