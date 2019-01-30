import { Component, OnInit } from '@angular/core';
import { ProfileCardService } from 'src/app/shared/services/profile-card.service';
import { Messenger } from 'src/app/shared/models/messenger.model';

@Component({
  selector: 'insta-profile-messengers',
  templateUrl: './profile-messengers.component.html',
  styleUrls: ['./profile-messengers.component.scss']
})
export class ProfileMessengersComponent implements OnInit {
  messengerName = '';

  constructor(
    private profileCardService: ProfileCardService,
  ) { }

  ngOnInit() {
    this.profileCardService.doUserDefaultOptions(this.user);
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

  cancelChanges() {
    this.user = this.userDefault;
  }

  saveChanges() {
    this.profileCardService.updateUser(this.user);
  }

  addMessengerToList() {
    this.profileCardService.addMessenger(this.messengerName);
    this.messengerName = '';
  }

  deleteMessengerFromList(event, index) {
    const target = event.target;
    const buttonTag = 'button'.toUpperCase();
    const spanTag = 'span'.toUpperCase();

    if ( target.tagName === buttonTag || target.tagName === spanTag ) {
      this.user.profile.messengers.splice(index, 1);
    }
  }; 
}


// enabled: true
// id: "5c4f1c90aa1955007aca6c9f"
// messenger: "whatsapp"
// name: "+380934587499"
// redirectUrl: "https://mssg.me/r/m/5c4f1c90aa1955007aca6c9f"
// type: "private"
// _id: "5c4f1c90aa1955007aca6c9f"