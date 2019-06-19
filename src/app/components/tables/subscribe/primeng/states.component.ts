import { Component, OnInit } from '@angular/core';
import { USState } from '../../../../models/state';
import { StatePromiseService } from '../../../../services/promise/states.service';
import { DataView, DataViewLayoutOptions } from 'primeng/dataview';

@Component({
  templateUrl: './states.component.html',
  styleUrls: ['../../../../app.component.scss'],
  providers: [
    StatePromiseService,
    DataView,
    DataViewLayoutOptions
  ]
})
export class StatePromisePrimeNG implements OnInit {

  states: USState[];

  selectedUSState: USState;

  displayDialog: boolean;

  constructor(private stateService: StatePromiseService) { }

  ngOnInit() {
    this.stateService.getStates().then(data => this.states = data.states);
  }

  selectUSState(state: USState) {
    this.selectedUSState = state;
    this.displayDialog = true;
  }

  onDialogHide() {
    this.selectedUSState = null;
  }
}
