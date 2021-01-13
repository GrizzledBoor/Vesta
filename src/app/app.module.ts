import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrganizationCardComponent } from './components/organization-card/organization-card.component';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { AppRoutingModule } from './app.routing';
import { OrganizationTableComponent } from './components/organization-table/organization-table.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrganizationService } from './services/organization.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MockInterceptor } from './interceptors/mock.interceptor';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    AppComponent,
    OrganizationCardComponent,
    OrganizationTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    CardModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    InputNumberModule
  ],
  providers: [
    OrganizationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
