import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';

import { Observable, of } from 'rxjs';

import { map } from 'rxjs/operators';
import { Messenger } from '../models/messenger.model';


//https://embed.plnkr.co/plunk/norta8
//https://stackblitz.com/edit/angular-2-5-registration-login-example?file=app%2F_services%2Fuser.service.ts

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get(`http://localhost:3000/users?account.email=${email}`)
      .pipe(map((user: User[]) => user[0] ? user[0] : null));
  }

  createNewUser(user: User): Observable<User> {
    return this.http.post(`http://localhost:3000/users`, user)
      .pipe(map((user: User) => user));
  }

  getUser(userId: number): Observable<User> {
    return this.http.get(`http://localhost:3000/users/${userId}`)
      .pipe(map((user: User) => user));
  }

  editUser(user: User): Observable<User> {
    return this.http.put(`http://localhost:3000/users/${user.id}`, user)
      .pipe(map((user: User) => user));
  }

  // createNewMessenger(messenger: Messenger): Observable<Messenger> {
  //   return this.http.post(`http://localhost:3000/users/profile.messengers`, messenger)
  //     .pipe(map((messenger: Messenger) => messenger));
  // }

  //http://localhost:3000/users?profileaccount.email=



}
