import { Component, OnInit } from "@angular/core";

import { AuthService } from "src/app/shared/services/auth.service";

import { ProfileCardService } from "../services/profile-card.service";


@Component({
  selector: "insta-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private profileCardService: ProfileCardService
  ) {}

  ngOnInit() {

  }

  onLogout() {
    this.authService.logout();
  }

  get user() {
    return this.profileCardService.userOptions;
  }
}
