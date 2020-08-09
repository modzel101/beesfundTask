import { Component, OnInit, Input } from '@angular/core';
import { BeefundEvent } from 'src/app/shared/models/beefund-event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() event: BeefundEvent;
  @Input() eventIndex: number;
  color: string;


  constructor() { }

  ngOnInit(): void {
    if (this.eventIndex % 2 === 0) {
      this.color = '#484848';
    }
    else {
      this.color = '#A8A8A8';
    }
  }

}
