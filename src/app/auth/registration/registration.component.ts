import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from 'src/app/shared/services/users.service';

import { User } from 'src/app/shared/models/user.model';


import { Observable, Observer, of, timer,  } from 'rxjs';
import { map, switchMap, debounceTime,  distinctUntilChanged, first, take   } from 'rxjs/operators';



@Component({
  selector: 'insta-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  form: FormGroup;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null,
        [
          Validators.required
        ]
      ),
      'email': new FormControl(null,
        [
          Validators.required,
          Validators.email
        ],
        this._forbiddenEmails.bind(this)
      ),
      'page': new FormControl(null,
        [
          Validators.required
        ]
      ),
      'password': new FormControl(null,
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ),
      'agree': new FormControl(false,
        [
          Validators.requiredTrue
        ]
      ),
    });
  }

  onSubmit() {
    const {email, password, name, page} = this.form.value;
    const user = new User(email, password, name, page);

    this.usersService.createNewUser(user).subscribe((user: User) => {
      this.router.navigate(['/login'], {
        queryParams: {
          nowCanLogin: true
        }
      });
    });
  }

  // _forbiddenEmails(control: FormControl): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this.usersService.getUserByEmail(control.value)
  //       .subscribe((user: User) => {
  //         if(user) {
  //           resolve({forbiddenEmail: true});
  //         }
  //         else {
  //           resolve(null);
  //         }
  //       })
  //   });
  // }

  //https://angularfirebase.com/lessons/async-form-validation-in-firebase-enforce-uniqueness/

  _forbiddenEmails(control: FormControl): Observable<ValidationErrors> {
 
    return this.usersService.getUserByEmail(control.value)
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        take(1),
        map((user: User) => user ? {forbiddenEmail: true} : null)
      );

    // return new Observable(observer => {
    //   const a =  this.usersService.getUserByEmail(control.value);
    //   if( control.value === a ) {
    //     observer.next({forbiddenEmail: true});
    //   } else {
    //     observer.next(null);
    //   }
    // });
  }
}

