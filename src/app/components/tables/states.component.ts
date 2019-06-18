import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { USState } from '../../models/state';
import { USStateService } from '../../services/states.service';
import { StateApiService } from '../../services/states-api.service';
import { NgbdSortableHeader, SortEvent } from '../../directives/sortable.directive';

@Component({
  selector: 'app-states-table',
  templateUrl: './states.component.html',
  providers: [
    USStateService,
    StateApiService,
    DecimalPipe
  ]
})
export class StatesTableComponent {
  usStates$: Observable<USState[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: USStateService) {
    this.usStates$ = service.usStates$;
    this.total$ = service.total$;
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
