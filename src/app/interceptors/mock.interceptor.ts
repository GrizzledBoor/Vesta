import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { OrganizationAccount } from '../shared/models/organization-data.model';

const organizationAccounts: OrganizationAccount[] = [
  {
    organizationName: 'ООО "Организация 1"',
    taxpayerNumber: 4881474926,
    creationDate: '11.01.2021',
    balance: 1420000
  },
  {
    organizationName: 'ООО "Организация 2"',
    taxpayerNumber: 2195076972,
    creationDate: '12.01.2021',
    balance: 5120000
  },
  {
    organizationName: 'ООО "Организация 3"',
    taxpayerNumber: 8741376972,
    creationDate: '13.01.2021',
    balance: 10000000
  },
  {
    organizationName: 'ООО "Организация 4"',
    taxpayerNumber: 1498257599,
    creationDate: '14.01.2021',
    balance: 10000
  },
  {
    organizationName: 'ООО "Организация 5"',
    taxpayerNumber: 2394511115,
    creationDate: '15.01.2021',
    balance: 430000
  },
  {
    organizationName: 'ООО "Организация 6"',
    taxpayerNumber: 6685871687,
    creationDate: '16.01.2021',
    balance: 70000
  },
  {
    organizationName: 'ООО "Организация 7"',
    taxpayerNumber: 1877190595,
    creationDate: '17.01.2021',
    balance: 200000
  },
  {
    organizationName: 'ООО "Организация 8"',
    taxpayerNumber: 8804184440,
    creationDate: '18.01.2021',
    balance: 8443000
  },
  {
    organizationName: 'ООО "Организация 9"',
    taxpayerNumber: 2753953588,
    creationDate: '19.01.2021',
    balance: 45712444
  },
  {
    organizationName: 'ООО "Организация 10"',
    taxpayerNumber: 6762279341,
    creationDate: '20.01.2021',
    balance: 0
  },

];

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return of(new HttpResponse({status: 200, body: organizationAccounts }));
    // return next.handle(req);
  }
}
