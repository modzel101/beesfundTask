import { Component, OnInit } from '@angular/core';
import { BeesfundEventsService } from './beesfund-events.service';
import { BeefundEvent } from '../shared/models/beefund-event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: BeefundEvent[];

  constructor(private beesfundEventService: BeesfundEventsService) { }

  ngOnInit(): void {
    this.beesfundEventService.getEvents().subscribe(ev => {
      this.events = ev;
      console.log(this.events);
      console.log(this.events[0].type);
    });

  }


}
