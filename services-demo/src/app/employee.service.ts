import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public Employees = [  
    {"id" : 1001, "name" : "Irshad", "salary" : 90000},  
    {"id" : 1002, "name" : "Imran", "salary" : 80000},  
    {"id" : 1003, "name" : "Rahul", "salary" : 70000},  
    {"id" : 1004, "name" : "Ajay", "salary" : 85000},  
    {"id" : 1005, "name" : "Sunny", "salary" : 60000}  
  ];
  
  constructor() { }

  getEmployee()
  {
    return this.Employees;
  }

}
