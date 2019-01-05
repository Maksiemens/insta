import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { User } from '../models/user.model';

//https://embed.plnkr.co/plunk/norta8
// https://stackblitz.com/edit/angular-2-5-registration-login-example?file=app%2F_services%2Fuser.service.ts

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUserByEmail(email: string): Observable<User> {

    // return this.http.get(`/app/food.jsonusers?email=${email}`);

    if(email === "wfm@mail.ru") {
      
      return of({
        id: 1,
        email: "wfm@mail.ru",
        password: "12345678",
        name: "Администратор"
      });

    }
    else {
      return of(null);
    }

  }


}
