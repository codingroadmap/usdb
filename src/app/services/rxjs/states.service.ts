import { Injectable, PipeTransform, OnInit } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { USState } from '../../models/state';
import { StateApiService } from '../states-api.service';
import { USSTATES } from '../../../data/states';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortDirection } from '../../directives/sortable.directive';

interface SearchResult {
  usStates: USState[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: string;
  sortDirection: SortDirection;
}

function compare(v1, v2) {
  return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

function sort(usStates: USState[], column: string, direction: string): USState[] {
  if (direction === '') {
    return usStates;
  } else {
    return [...usStates].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(usState: USState, term: string, pipe: PipeTransform) {
  return usState.name.toLowerCase().includes(term)
    || pipe.transform(usState.avg_income).includes(term)
    || pipe.transform(usState.population).includes(term);
}

@Injectable({ providedIn: 'root' })
export class USStateService implements OnInit {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _usStates$ = new BehaviorSubject<USState[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(
    private pipe: DecimalPipe,
    private stateService: StateApiService
  ) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._usStates$.next(result.usStates);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  ngOnInit() {
    // this.stateService.getStates().then(data => {
    //   console.log(data);
    //   this.USSTATES = data;
    // });
  }

  get usStates$() { return this._usStates$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({ page }); }
  set pageSize(pageSize: number) { this._set({ pageSize }); }
  set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
  set sortColumn(sortColumn: string) { this._set({ sortColumn }); }
  set sortDirection(sortDirection: SortDirection) { this._set({ sortDirection }); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

    // 1. sort
    let usStates = sort(USSTATES, sortColumn, sortDirection);

    // 2. filter
    usStates = usStates.filter(usState => matches(usState, searchTerm, this.pipe));
    const total = usStates.length;

    // 3. paginate
    usStates = usStates.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ usStates, total });
  }
}
