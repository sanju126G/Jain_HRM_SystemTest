import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {

  employeeName: string;
  department:string;
  designation:string;
  employeeId: string;
  type: string;
  status:string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {employeeName: 'Leasie Watson',department:"Sales",designation:"Sales Manager", employeeId: 'Hydrogen', type: 'Office',status:'Permanent'},
  {employeeName: 'Leasie Watson',department:"Sales",designation:"Sales Manager", employeeId: 'Helium', type: 'Office',status:'Permanent'},
  {employeeName: 'Leasie Watson',department:"Sales",designation:"Sales Manager", employeeId: 'Lithium', type: 'Office',status:'Permanent'},
  {employeeName: 'Leasie Watson',department:"Sales",designation:"Sales Manager", employeeId: 'Beryllium', type:'Office',status:'Permanent'},
  {employeeName: 'Leasie Watson',department:"Sales",designation:"Sales Manager", employeeId: 'Boron', type: 'Office',status:'Permanent'},
  {employeeName: 'Leasie Watson',department:"Sales",designation:"Sales Manager", employeeId: 'Carbon', type: 'Office',status:'Permanent'},
  {employeeName: 'Leasie Watson',department:"Sales",designation:"Sales Manager", employeeId: 'Nitrogen', type: 'Office',status:'Permanent'},
  {employeeName: 'Leasie Watson',department:"Sales",designation:"Sales Manager", employeeId: 'Oxygen', type: 'Office',status:'Permanent'},
  {employeeName: 'Leasie Watson',department:"Sales",designation:"Sales Manager", employeeId: 'Fluorine', type: 'Office',status:'Permanent'},
  {employeeName: 'Leasie Watson',department:"Sales",designation:"Sales Manager", employeeId: 'Neon', type: 'Office',status:'Permanent'},
  {employeeName: 'Leasie Watson',department:"Sales",designation:"Sales Manager", employeeId: 'Sodium', type: 'Office',status:'Permanent'},
  {employeeName: 'Leasie Watson',department:"Sales",designation:"Sales Manager", employeeId: 'Magnesium', type: 'Office',status:'Permanent'},
  {employeeName: 'Leasie Watson',department:"Sales",designation:"Sales Manager", employeeId: 'Aluminum', type: 'Office',status:'Permanent'},
  {employeeName: 'Leasie Watson',department:"Sales",designation:"Sales Manager", employeeId: 'Silicon', type: 'Office',status:'Permanent'},
  {employeeName: 'Leasie Watson',department:"Sales",designation:"Sales Manager", employeeId: 'Phosphorus', type: 'Office',status:'Permanent'},
  {employeeName: 'Leasie Watson',department:"Sales",designation:"Sales Manager", employeeId: 'Sulfur', type: 'Office',status:'Permanent'},
  {employeeName: 'Leasie Watson',department:"Sales",designation:"Sales Manager", employeeId: 'Chlorine', type: 'Office',status:'Permanent'},
  {employeeName: 'Leasie Watson',department:"Sales",designation:"Sales Manager", employeeId: 'Argon', type: 'Office',status:'Permanent'},
  {employeeName: 'Leasie Watson',department:"Sales",designation:"Sales Manager", employeeId: 'Potassium', type: 'Office',status:'Permanent'},
  {employeeName: 'Leasie Watson',department:"Sales",designation:"Sales Manager", employeeId: 'Calcium', type: 'Office',status:'Permanent'},
];
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['employeeName', 'department','designation','employeeId', 'type','status','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}





