import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProfileCardService } from 'src/app/shared/services/profile-card.service';

import { User } from 'src/app/shared/models/user.model';


@Component({
  selector: 'insta-profile-interface',
  templateUrl: './profile-interface.component.html',
  styleUrls: ['./profile-interface.component.scss']
})
export class ProfileInterfaceComponent implements OnInit {
  profileGreeting:string;
  profileDescription:string;
  profileFullname:string;
  profileCategory:string;
  profileUrl:string;

  constructor(
    private router: Router,
    private profileCardService: ProfileCardService,
  ) { }

  ngOnInit() {
    this.doDafaultUserCard();
  }

  get user() {
    return this.profileCardService.userOptions;
  }

  set user(value) {
    this.profileCardService.userOptions = value;
  }

  get userDefault() {
    return this.profileCardService.userDefaultOptions;
  }

  // get userWithoutСhanges() {
  //   return this.profileCardService.userDefaultOptions;
  // }
  // https://medium.com/@kanby/%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0-%D0%B2-javascript-83eb708f19b5

  getProfileText(event) {
    if(event.target.name === 'profileGreeting') {
      this.user.profile.interface.greeting = event.target.value;
    }
    else if(event.target.name === 'profileDescription') {
      this.user.profile.interface.description = event.target.value;
    }
    else if(event.target.name === 'profileFullname') {
      this.user.profile.interface.fullname = event.target.value;
    }
    else if(event.target.name === 'profileCategory') {
      this.user.profile.interface.category = event.target.value;
    }
    else if(event.target.name === 'profileCategory') {
      this.user.profile.interface.category = event.target.value;
    }
    else if(event.target.name === 'profileUrl') {
      this.user.profile.interface.url = event.target.value;
    }
  }

  cancelChanges() {
    this.user = this.userDefault;
  }

  saveChanges() {
    this.profileCardService.updateUser(this.user);
  }

  doDafaultUserCard() {
    this.profileGreeting = this.user.profile.interface.greeting;
    this.profileDescription = this.user.profile.interface.description;
    this.profileFullname = this.user.profile.interface.fullname;
    this.profileCategory = this.user.profile.interface.category;
    this.profileUrl = this.user.profile.interface.url;

    this.profileCardService.doUserDefaultOptions(this.user);
  }  
}
