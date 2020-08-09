import { EventType } from './event-type.model';

export class BeefundEvent {
  id: number;
  name: string;
  datetime: string;
  registration_url: string;
  description: string;
  type: EventType;
}
