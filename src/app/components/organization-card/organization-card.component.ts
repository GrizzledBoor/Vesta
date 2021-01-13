import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../../services/state.service';
import { Subscription } from 'rxjs';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-organization-card',
  templateUrl: './organization-card.component.html',
  styleUrls: ['./organization-card.component.css']
})
export class OrganizationCardComponent implements OnInit, OnDestroy {
  displayDialog = true;
  private routeSub: Subscription;
  private stateSub: Subscription;

  formGroup = this.formBuilder.group({
    organizationName: [{value: null, disabled: true}],
    taxpayerNumber: [{value: null, disabled: true}],
    creationDate: [{value: null, disabled: true}],
    balance: [{value: null, disabled: true}],
  });

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private stateService: StateService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(({taxpayerNumber}) => {
      this.stateSub = this.stateService.select(
        (state) => state.organizationAccounts.find(organizationAccount => organizationAccount.taxpayerNumber === Number(taxpayerNumber))
      ).subscribe(selectedOrganization => this.formGroup.patchValue({...selectedOrganization}));
    });
  }

  close(): void {
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
    this.stateSub?.unsubscribe();
  }
}
