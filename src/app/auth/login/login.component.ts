import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UsersService } from 'src/app/shared/services/users.service';
import { AuthService } from 'src/app/shared/services/auth.service';

import { User } from 'src/app/shared/models/user.model';
import { Message } from 'src/app/shared/models/message.model';


@Component({
  selector: 'insta-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  message: Message;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  
  ngOnInit() {
    this.message = new Message('', 'danger');

    this.route.queryParams.subscribe((params: Params) => {
      if(params['nowCanLogin']) {
        this._showMessage('Теперь Вы можете войти в систему', 'success');
      }
    });

    this.form = new FormGroup({
      'email': new FormControl(null,
        [
          Validators.required,
          Validators.email
        ]
      ),
      'password': new FormControl(null,
        [
          Validators.required,
          Validators.minLength(6),
        ]
      )
    });
  }

  _showMessage(text: string, type: string = 'danger') {
    this.message = new Message(text, type);
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);    
  }

  onSubmit() {
    const formData = this.form.value;
    this.usersService.getUserByEmail(formData.email).subscribe((user: User) => {

      if(user) {
        if(user.password === formData.password) {
          this.message.text = '';
          window.localStorage.setItem('user', JSON.stringify(user));
          this.authService.login();
          this.router.navigate(['/profile']);
        }
        else {
          this._showMessage('Пароль не верный');
        }
      }
      else {
        this._showMessage('Такого пользователя не существует');
      }

    });
  }

}
