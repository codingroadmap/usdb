import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USState } from '../models/state';

@Injectable()
export class StateApiService {
  // STATES: USState;
  states: any;

  constructor(private http: HttpClient) { }

  getStates() {
    // return this.http.get<any>('https://united-states-database.herokuapp.com/states/')
    return this.http.get<any>('http://localhost:3000/states/')
      .toPromise()
      .then(data => {
        const USSTATES = data.states;
        return USSTATES;
      });
  }
}
