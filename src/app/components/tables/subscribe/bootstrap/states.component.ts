import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { USState } from '../../../../models/state';
import { USStateService } from '../../../../services/rxjs/states.service';
import { StateSubscriptionService } from '../../../../services/subscribe/states.service';
import { StateApiService } from '../../../../services/states-api.service';
import { NgbdSortableHeader, SortEvent } from '../../../../directives/sortable.directive';

@Component({
  selector: 'states-subscribe-bootstrap',
  templateUrl: './states.component.html',
  styleUrls: [
    '../../../../app.component.scss'
  ],
  providers: [
    StateSubscriptionService,
    StateApiService,
    DecimalPipe
  ]
})
export class StatesSubscribeTable implements OnInit {
  states: Observable<USState[]>;

  constructor(
    public apiService: StateApiService,
    public service: StateSubscriptionService
  ) {}

  async ngOnInit() {
    this.getStates();
  }

  async getStates() {
    this.service.getStates().subscribe(data => {
      this.states = data.states;
      console.log(this.states);
    });
  }
}
