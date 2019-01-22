import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';

import { Observable, of } from 'rxjs';

import { map } from 'rxjs/operators';


//https://embed.plnkr.co/plunk/norta8
//https://stackblitz.com/edit/angular-2-5-registration-login-example?file=app%2F_services%2Fuser.service.ts

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get(`http://localhost:3000/users?email=${email}`)
      .pipe(map((user: User[]) => user[0] ? user[0] : null));
  }

  createNewUser(user: User): Observable<User> {
    return this.http.post(`http://localhost:3000/users`, user)
    .pipe(map((user: User) => user));
  }

}
