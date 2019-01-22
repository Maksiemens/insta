import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthenticated:boolean = false;
  
  constructor() { }

  login(): void {
    this._isAuthenticated = true;
  }

  logout(): void {
    this._isAuthenticated = false;
    window.localStorage.clear();
  }

  isLoggedIn(): boolean {
    return this._isAuthenticated;
  }

}
