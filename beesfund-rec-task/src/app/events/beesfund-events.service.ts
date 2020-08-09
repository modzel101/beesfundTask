import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BeefundEvent } from '../shared/models/beefund-event.model';


@Injectable({
  providedIn: 'root'
})
export class BeesfundEventsService {

  apiUrl = 'https://dev.bfund.ovh/api';

  constructor( private http: HttpClient) { }

  getEvents(): Observable<BeefundEvent[]> {
    return this.http.get<BeefundEvent[]>(this.apiUrl + '/events/1197');
  }
}
