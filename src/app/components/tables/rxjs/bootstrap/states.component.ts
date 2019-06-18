import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { USState } from '../../../../models/state';
import { USStateService } from '../../../../services/rxjs/states.service';
import { StateApiService } from '../../../../services/states-api.service';
import { NgbdSortableHeader, SortEvent } from '../../../../directives/sortable.directive';

@Component({
  selector: 'app-states-table',
  templateUrl: './states.component.html',
  providers: [
    USStateService,
    StateApiService,
    DecimalPipe
  ]
})
export class StatesTableComponent implements OnInit {
  usStates$: Observable<USState[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    public service: USStateService,
    public apiService: StateApiService
  ) {
    this.usStates$ = service.usStates$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.apiService.getStates().then(data => {
      console.log(data);
    });
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
