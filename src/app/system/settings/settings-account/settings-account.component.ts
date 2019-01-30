import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';





export interface Language {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'insta-settings-account',
  templateUrl: './settings-account.component.html',
  styleUrls: ['./settings-account.component.scss']
})


export class SettingsAccountComponent implements OnInit {
  form: FormGroup;

  languages: Language[] = [
    {value: 'RU', viewValue: 'Русский'},
    {value: 'EN', viewValue: 'English'},
  ];

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
        ]
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
  
  // onSubmit() {
  //   const {email, password, name, page} = this.form.value;
  //   const user = new User(email, password, name, page);

  //   this.usersService.createNewUser(user).subscribe((user: User) => {
  //     this.router.navigate(['/login'], {
  //       queryParams: {
  //         nowCanLogin: true
  //       }
  //     });
  //   });
  // }

}
