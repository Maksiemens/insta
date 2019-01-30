import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'insta-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {

  @Input() messenger;

  constructor() { }

  ngOnInit() {

  } 
}
