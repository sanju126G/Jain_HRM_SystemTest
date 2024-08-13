import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { SharedModule } from '../shared/module/shared.module';
import { HeaderComponent } from './layoutComponents/header/header.component';
import { NavbarComponent } from './layoutComponents/navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    ApplicationComponent,
    HeaderComponent,
    DashboardComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    SharedModule,
  ]
})
export class ApplicationModule { }
