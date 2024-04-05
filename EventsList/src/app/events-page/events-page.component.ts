import { Component, OnInit } from '@angular/core';
import { EventsPageService } from './events-page.service';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.sass']
})
export class EventsPageComponent implements OnInit {
  eventList: any[];
  months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
  fullMonths = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembo', 'Dezembro'];

  getDay(date: any){
    let dateEvent = new Date(date);
    return dateEvent.getDay();
  }
  
  getMonth(date: any){
    let dateEvent = new Date(date);
    return this.months[dateEvent.getMonth()];
  }
  
  getFullMonth(date: any){
      let dateEvent = new Date(date);
      return this.fullMonths[dateEvent.getMonth()];
  }

  getStartTime(date: any){
    let dateEvent = new Date(date);
    let hour = dateEvent.getHours();
    if(hour > 12){
      hour = hour-12
      return hour+" PM"
    }else {
      return hour+" AM"
    }
  }

  getEndTime(date: any){
    let dateEvent = new Date(date);
    let hour = dateEvent.getHours();
    if(hour > 12){
      hour = hour-12
      return hour+" PM"
    }else {
      return hour+" AM"
    }
  }
  constructor(private eventsPageService: EventsPageService) { }

  ngOnInit(): void {

      this.eventsPageService.getEvents().subscribe({
        next: data => {
          this.eventList = data.events;
          console.log(this.eventList)
        },
        error: error => {
          return console.error('Ocorreu um erro:', error);
        }
    });
  }
}
