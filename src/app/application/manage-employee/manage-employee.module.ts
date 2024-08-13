import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageEmployeeRoutingModule } from './manage-employee-routing.module';
import { ManageEmployeeComponent } from './manage-employee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeeComponent } from './employee/employee.component';
import { SharedModule } from 'src/app/shared/module/shared.module';



@NgModule({
  declarations: [
    ManageEmployeeComponent,
    AddemployeeComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    ManageEmployeeRoutingModule,
    SharedModule
  ]
})
export class ManageEmployeeModule { }
