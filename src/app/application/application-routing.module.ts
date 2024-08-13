import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  { path: '', component: ApplicationComponent,children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'manage-employee', loadChildren: () => import('./manage-employee/manage-employee.module').then(m => m.ManageEmployeeModule) }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
