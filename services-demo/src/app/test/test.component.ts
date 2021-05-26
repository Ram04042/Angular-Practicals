import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public Employees=[];
  constructor(private service:EmployeeService) 
  {
    this.Employees= this.service.getEmployee();

  }

  ngOnInit(): void {
  }

}
