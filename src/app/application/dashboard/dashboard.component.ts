import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import Chart from 'chart.js/auto';

export interface PeriodicElement {
  designation: string;
  employeeName: string;
  type: number;
  checkintime: string;
  status:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {employeeName: 'Leasie Watson', designation: 'Hydrogen', type: 1.0079, checkintime: 'H',status:'On Time'},
  {employeeName: 'Leasie Watson', designation: 'Helium', type: 4.0026, checkintime: 'He',status:'On Time'},
  {employeeName: 'Leasie Watson', designation: 'Lithium', type: 6.941, checkintime: 'Li',status:'Late'},
  {employeeName: 'Leasie Watson', designation: 'Beryllium', type: 9.0122, checkintime: 'Be',status:'Late'},
  {employeeName: 'Leasie Watson', designation: 'Boron', type: 10.811, checkintime: 'B',status:'On Time'},
  {employeeName: 'Leasie Watson', designation: 'Carbon', type: 12.0107, checkintime: 'C',status:'On Time'},
  {employeeName: 'Leasie Watson', designation: 'Nitrogen', type: 14.0067, checkintime: 'N',status:'On Time'},
  {employeeName: 'Leasie Watson', designation: 'Oxygen', type: 15.9994, checkintime: 'O',status:'On Time'},
  {employeeName: 'Leasie Watson', designation: 'Fluorine', type: 18.9984, checkintime: 'F',status:'On Time'},
  {employeeName: 'Leasie Watson', designation: 'Neon', type: 20.1797, checkintime: 'Ne',status:'On Time'},
  {employeeName: 'Leasie Watson', designation: 'Sodium', type: 22.9897, checkintime: 'Na',status:'On Time'},
  {employeeName: 'Leasie Watson', designation: 'Magnesium', type: 24.305, checkintime: 'Mg',status:'On Time'},
  {employeeName: 'Leasie Watson', designation: 'Aluminum', type: 26.9815, checkintime: 'Al',status:'c'},
  {employeeName: 'Leasie Watson', designation: 'Silicon', type: 28.0855, checkintime: 'Si',status:'On Time'},
  {employeeName: 'Leasie Watson', designation: 'Phosphorus', type: 30.9738, checkintime: 'P',status:'On Time'},
  {employeeName: 'Leasie Watson', designation: 'Sulfur', type: 32.065, checkintime: 'S',status:'On Time'},
  {employeeName: 'Leasie Watson', designation: 'Chlorine', type: 35.453, checkintime: 'Cl',status:'On Time'},
  {employeeName: 'Leasie Watson', designation: 'Argon', type: 39.948, checkintime: 'Ar',status:'On Time'},
  {employeeName: 'Leasie Watson', designation: 'Potassium', type: 39.0983, checkintime: 'K',status:'On Time'},
  {employeeName: 'Leasie Watson', designation: 'Calcium', type: 40.078, checkintime: 'Ca',status:'On Time'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['employeeName', 'designation', 'type', 'checkintime', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.renderBarChart();
  }

  renderBarChart(){
    const canvasId = document.getElementById('attendance')  as HTMLCanvasElement;
    const labels = ['MON','TUE','WED','THU','FRI','SAT','SUN'];
    new Chart(canvasId,{
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Attendence Overview',
              data: [27,20,40,60,75,80,56,100],
              barPercentage:0.1,
              borderRadius: {
                topLeft: 10,
                topRight: 10,
                bottomLeft: 10,
                bottomRight: 10
              }
            },
            {
              label: 'Attendence Overview',
              data: [37,30,20,40,50,80,96,100],
              barPercentage:0.1,
              borderRadius: {
                topLeft: 10,
                topRight: 10,
                bottomLeft: 10,
                bottomRight: 10
              }
            },
            {
              label: 'Attendence Overview',
              data: [67,10,40,30,50,80,95,100],
              barPercentage:0.1,
              borderRadius: {
                topLeft: 10,
                topRight: 10,
                bottomLeft: 10,
                bottomRight: 10
              }
            }
          ]
        },
        options: {
          scales: {
            x: {
              grid: {
                display: false
              },
              stacked:true
            },
            y: {
              grid: {
                display: false
              },
              stacked:true
            }
          }
        }
      }
    );
  }

}
