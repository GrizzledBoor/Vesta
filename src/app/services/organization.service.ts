import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrganizationAccount } from '../shared/models/organization-data.model';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getOrganizations(): Observable<OrganizationAccount[]> {
    return this.httpClient.get<OrganizationAccount[]>('http://backend.com/api/v3/organizationAccounts');
  }
}
