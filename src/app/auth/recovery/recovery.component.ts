import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { User } from 'src/app/shared/models/user.model';
import { Message } from 'src/app/shared/models/message.model';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'insta-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {
  form: FormGroup;
  message: Message;
  matcher = new MyErrorStateMatcher();
  
  constructor(
    private usersService: UsersService,
  ) { }

  ngOnInit() {
    this.message = new Message('', 'danger');

    this.form = new FormGroup({
      'email': new FormControl(null,
        [
          Validators.required,
          Validators.email
        ],
        // this._nonexistentEmail.bind(this)
      )      
    });

  }

  onSubmit() {
    const formData = this.form.value;
    this.usersService.getUserByEmail(formData.email).subscribe((user: User) => {

      if(user) {
        //logic of email
        this._showMessage('Пароль выслан', 'success');
        
      }
      else {
        this._showMessage('Такого пользователя не существует');
      }

    });
  }

  _showMessage(text: string, type: string = 'danger') {
    this.message = new Message(text, type);
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);    
  }

  // _nonexistentEmail(control: FormControl): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this.usersService.getUserByEmail(control.value)
  //       .subscribe((user: User) => {
  //         if(user) {
  //           resolve(null);
  //         }
  //         else {
  //           resolve({nonexistentEmail: true});
  //         }
  //       })
  //   });
  // }


}
