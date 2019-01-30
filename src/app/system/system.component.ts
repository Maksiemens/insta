import { Component, OnInit } from "@angular/core";

import { ProfileCardService } from '../shared/services/profile-card.service';


@Component({
  selector: "insta-system",
  templateUrl: "./system.component.html",
  styleUrls: ["./system.component.scss"]
})
export class SystemComponent implements OnInit {

  constructor(private profileCardService: ProfileCardService) { }

  ngOnInit() { }

  get user() {
    return this.profileCardService.userOptions;
  }
}
