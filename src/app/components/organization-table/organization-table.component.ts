import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationAccount } from '../../shared/models/organization-data.model';
import { AppRoutes } from '../../shared/app-routes';
import { StateService } from '../../services/state.service';
import { OrganizationService } from '../../services/organization.service';

@Component({
  selector: 'app-organization-table',
  templateUrl: './organization-table.component.html',
  styleUrls: ['./organization-table.component.css']
})
export class OrganizationTableComponent implements OnInit {
  cols = [
    {field: 'organizationName', header: 'Наименование организации'},
    {field: 'taxpayerNumber', header: 'ИНН'},
    {field: 'creationDate', header: 'Дата открытия счета'},
  ];
  organizationAccounts: OrganizationAccount[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private stateService: StateService,
    private organizationService: OrganizationService
  ) {
  }

  ngOnInit(): void {
    this.organizationService.getOrganizations()
      .subscribe(organizationAccounts => {
        this.organizationAccounts = organizationAccounts;
        this.stateService.setState({organizationAccounts: this.organizationAccounts});
      });
  }

  openOrganizationCard(organization: OrganizationAccount): void {
    this.router.navigate([AppRoutes.organizationCard, organization.taxpayerNumber], {relativeTo: this.route});
  }
}
