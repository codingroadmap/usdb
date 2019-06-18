import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { USState } from '../../../../models/state';
import { StateSubscriptionService } from '../../../../services/subscribe/states.service';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: USState[] = this.states;

@Component({
  selector: 'states-subscribe-material',
  templateUrl: './states.component.html',
  styleUrls: ['../../../../app.component.scss'],
  providers: [
    StateSubscriptionService
  ]
})
export class StatesSubscribeMaterial implements OnInit {
  displayedColumns: string[] = [
    // 'select',
    'id',
    'flag',
    'name',
    'population',
    'avg_income',
    'gdp',
    'cost_of_living'
  ];
  ELEMENT_DATA: any;
  states: any;
  dataSource = new MatTableDataSource<USState[]>(this.states);
  selection = new SelectionModel<USState>(true, []);

  constructor(
    public service: StateSubscriptionService
  ) {}

  ngOnInit() {
    this.service.getStates().subscribe(data => {
      this.states = data.states;
      this.dataSource = data.states;
      console.log(this.dataSource);
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   this.isAllSelected() ?
  //     this.selection.clear() :
  //     this.dataSource.data.forEach(row => this.selection.select(row));
  // }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: USState): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}
