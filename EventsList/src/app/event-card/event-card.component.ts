import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.sass']
})
export class EventCardComponent implements OnInit {

  @Input () fullMonth = '';
  @Input () day = '';
  @Input () month = '';
  @Input () startTime = '';
  @Input () host = '';
  @Input () endTime = '';
  @Input () titleEvent = '';
  @Input () eventCategory = '';
  @Input () imageAdress = '';
  @Input () showMonth: boolean;


  constructor() { }

  ngOnInit(): void {
  }

}
