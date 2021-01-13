import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationCardComponent } from './components/organization-card/organization-card.component';
import { AppRoutes } from './shared/app-routes';

const routes: Routes = [
  {
    path: `${AppRoutes.organizationCard}/:taxpayerNumber`,
    component: OrganizationCardComponent
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
