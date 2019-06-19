import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { USState } from '../../models/state';

@Injectable({
  providedIn: 'root'
})
export class StatePromiseService {
  constructor(
    private http: HttpClient
  ) {}

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  getStates() {
    // return this.http.get('https://united-states-database.herokuapp.com/states/')
    return this.http.get('http://localhost:3000/states/')
      .toPromise()
      .then(data => {
        return data;
      })
      .catch(error => {
        return error;
      });
  }
}
