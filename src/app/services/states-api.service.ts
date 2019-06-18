import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USState } from '../models/state';

@Injectable()
export class StateApiService {
  // USSTATES: USState[];

  constructor(private http: HttpClient) { }

  getStates() {
  return this.http.get<any>('https://united-states-database.herokuapp.com/states/')
    .toPromise()
    .then(res => <USState[]>res.states)
    .then(data => {
      // this.USSTATES = data;
      return data;
    });
  }
}
