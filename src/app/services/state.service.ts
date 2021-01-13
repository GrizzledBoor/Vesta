import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { OrganizationAccount } from '../shared/models/organization-data.model';

export interface State {
  selectedOrganization?: OrganizationAccount;
  organizationAccounts?: OrganizationAccount[];
}

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private initialState: State = {
    selectedOrganization: null,
    organizationAccounts: []
  };

  private state$: BehaviorSubject<State>;

  private get state(): State {
    return this.state$.getValue();
  }

  constructor() {
    this.state$ = new BehaviorSubject<State>(this.initialState);
  }

  public select<K>(mapFn: (state: State) => K): Observable<K> {
    return this.state$.asObservable().pipe(
      map((state: State) => mapFn(state)),
      distinctUntilChanged()
    );
  }

  public setState(newState: State): void {
    this.state$.next({
      ...this.state,
      ...newState,
    });
  }
}
