import { Injectable } from "@angular/core";

import { UsersService } from "./users.service";

import { User } from "../models/user.model";
import { Messenger } from '../models/messenger.model';

import { Observable } from 'rxjs';



@Injectable({
  providedIn: "root"
})
export class ProfileCardService {
  userId: number;
  userOptionsAsync$: Observable<any>;

  userOptions: User;
  userDefaultOptions: User;

  messenger: Messenger;
  
  constructor(private usersService: UsersService) {
    // this.userOptionsAsync$ = this.usersService.getUser();
    // https://medium.com/@tkssharma/objects-in-javascript-object-assign-deep-copy-64106c9aefab
    this.init();
  }

  init() {
    this.userId = JSON.parse(window.localStorage.getItem('userId'));

    if (this.userId) {
      this.getUserOptions();
    }
  }

  getUserOptions() {
    this.usersService.getUser(this.userId).subscribe((data: User) => {    
      return this.userOptions = data;
    });
  }

  doUserDefaultOptions(user: User) {
    this.userDefaultOptions = JSON.parse(JSON.stringify(user));
  }

  updateUser(user: User) {
    this.usersService.editUser(user).subscribe((data:User) => data);
  }


  // copyUserFromServer(profile, account, id) {  
  //   this.copyUser = new User(profile, account, id);
  //   this.copyUser1 = new User(profile, account, id);

  //   console.log('this.copyUser', this.copyUser);
  //   console.log('this.copyUser', this.copyUser1 === this.copyUser);
    

  //   return this.copyUser;
  //   // https://www.codementor.io/ramnmiklus/deep-copying-an-object-in-javascript-mdlj2c318
  //   // https://github.com/ajaxorg/ace/blob/master/lib/ace/lib/lang.js
  // }

  addMessenger(keeping: string) {

    const userCreateMessenger = new Messenger(
      true,
      'randomNameOfMessenger',
      keeping,
      'redirectUrl',
      'private',
    );

    this.userOptions.profile.messengers.push(userCreateMessenger);
  }
}
