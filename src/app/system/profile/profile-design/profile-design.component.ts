import { Component, OnInit } from "@angular/core";
import { ProfileCardService } from 'src/app/shared/services/profile-card.service';

@Component({
  selector: "insta-profile-design",
  templateUrl: "./profile-design.component.html",
  styleUrls: ["./profile-design.component.scss"]
})
export class ProfileDesignComponent implements OnInit {
  profileColorGroup;

  colors = [
    "#51B3F7",
    "#903671",
    "#6D68CB",
    "#53CEC6",
    "#F9BC73",
    "#2F3542",
  ];


  color_1 = "#51B3F7";
  color_2 = "#903671";
  color_3 = "#6D68CB";
  color_4 = "#53CEC6";
  color_5 = "#F9BC73";
  color_6 = "#2F3542";

  selectedLink;

  constructor(
    private profileCardService: ProfileCardService,
  ) {}

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

  doCheck(event) {
    const inputTag = 'input'.toUpperCase();
    const targetValue = event.target.value;

    if (event.target.tagName === inputTag) {
      this.selectedLink = targetValue;

      this.user.profile.design.background.type = targetValue;
    }
  }

  isSelected(name: string): boolean {

    if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown
      return false;
    } else {
      return this.selectedLink === name; // if current radio button is selected, return true, else return false
    }
  }

  cancelChanges() {
    this.user = this.userDefault;
  }

  saveChanges() {
    this.profileCardService.updateUser(this.user);
  }

  doDafaultUserCard() {
    // this.profileGreeting = this.user.profile.design.type;
    // this.profileDescription = this.user.profile.interface.description;
    // this.profileFullname = this.user.profile.interface.fullname;
    // this.profileCategory = this.user.profile.interface.category;
    // this.profileUrl = this.user.profile.interface.url;

    this.profileCardService.doUserDefaultOptions(this.user);
  }  
}
