import { Component, OnInit } from "@angular/core";
import { ProfileCardService } from "../services/profile-card.service";
import { Messenger } from "../models/messenger.model";

@Component({
  selector: "insta-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  // items: Messenger[];

  constructor(private profileCardService: ProfileCardService) {}

  ngOnInit() {
    //Почему так не работает, изза того что карточа инитится один раз?
    //3адать вопрос Серому
    // this.items = this.user.profile.messengers;
    // console.log('ngOnInit CARD');
  }

  get user() {
    return this.profileCardService.userOptions;
  }
}
