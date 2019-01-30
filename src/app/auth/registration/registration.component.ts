import { Component, OnInit } from '@angular/core';
import { 
  FormControl,
  Validators,
  FormGroup,
  ValidationErrors
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

import { UsersService } from 'src/app/shared/services/users.service';
import { ProfileCardService } from 'src/app/shared/services/profile-card.service';
import { User } from 'src/app/shared/models/user.model';


@Component({
  selector: 'insta-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  form: FormGroup;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private profileCardService: ProfileCardService,

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

    const profile = {      
      interface: {
        greeting: 'Добро пожаловать',
        description: 'Выберите удобный для вас способ связи!',
        fullname: name,
        category: 'Пример: Консультант / дизайнер',
        url: page,
      },
      messengers: [],
      links: [],
      design: {
        background: {
          color: 'color',
          imageUrl: '',
          type: '#2F3542',
        },
        branding: true,
        photo: 'bear_profile.png',
        photoUrl: 'https://app.mssg.me/static/avatars/bear_profile.png',
      },
      widget: {
        color: '#F8C76D',
        device: 'all',
        position: 'right',
      },
      analytics: {
        facebook: '',
        google: '',
        yandex: '',
      },
    };

    const account = {
      avatar: '4064522vjr7neiut.jpeg',
      avatarUrl: 'https://mssg.me/upload/images/4064522vjr7neiut.jpeg',
      name: name,
      email: email,
      password: password,
      lang: 'ru',
      subscribe: true,
    };

    const user = new User(profile, account);
    
    this.usersService.createNewUser(user).subscribe((user: User) => {

      // this.profileCardService.userOptions = user;

      this.router.navigate(['/login'], { queryParams: { nowCanLogin: true } });
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

