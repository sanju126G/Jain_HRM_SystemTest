import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isNavbarCollapsed = true;
  selected = '1'
  constructor(private router: Router,) { }

  ngOnInit(): void {

  }
  getCurrentView() {
    const url = this.router.url;
    if (url.startsWith('/application/dashboard')) {
      return 'dashboard';
    } else if (url.startsWith('/application/manage-employee/addemployee')) {
      return 'addEmployee';
    } else if (url.startsWith('/application/manage-employee')) {
      return 'employees';
    } else {
      return '';
    }
  }
  toggle(){
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
