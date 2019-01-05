import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'insta-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  newUser = true;


  constructor() { }

  toggle() {
    this.newUser = !this.newUser;
  }

  ngOnInit() {

  }

}
