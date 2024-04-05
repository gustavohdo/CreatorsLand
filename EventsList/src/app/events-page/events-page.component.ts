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
  filteredEvents: any[];
  countMonth= []
  showWarning: boolean
  activeFilter: string = 'filterAllEvents';
  
  activateFilter(filter: string) {
    this.activeFilter = filter;
  }

  isFilterActive(filter: string): boolean {
    return this.activeFilter === filter;
  }

  getDay(date: any){
    let dateEvent = new Date(date);
    return dateEvent.getDate();
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
  

  getMonthEvents(month: any): any[] {
    return this.eventList.filter(event => {
      const eventMonth = new Date(event.start_datetime).getMonth() + 1;
      return eventMonth === month;
    });
  }

  showEvent(month: any, date: Date): number {
    const eventMonth = this.getFullMonth(date);
    if (month === eventMonth) {
        if (!this.countMonth[month]) {
            return this.countMonth[month] = 1;
        } else {
            return this.countMonth[month]++;
        }
    }
  }

  filterAllEvents(): void {
    this.countMonth= []
    this.activeFilter = "filterAllEvents"
    this.filteredEvents = this.eventList
  }

  filterNextEvents(): void {
    this.countMonth= []
    this.activeFilter = "filterNextEvents"
    const today = new Date();
    this.filteredEvents = this.eventList.filter(event => new Date(event.start_datetime) >= today);
  }

  filterPreviousEvents(): void {
    this.countMonth= []
    this.activeFilter = "filterPreviousEvents"
    const today = new Date();
    this.filteredEvents = this.eventList.filter(event => new Date(event.start_datetime) < today);
  }



  
  constructor(private eventsPageService: EventsPageService) { }

  ngOnInit(): void {
      this.showWarning = false;
      this.eventsPageService.getEvents().subscribe({
        next: data => {
          this.eventList = data.events;
          this.filterAllEvents();
        },
        error: error => {
          this.showWarning = true;
        }
    });
  }
}
