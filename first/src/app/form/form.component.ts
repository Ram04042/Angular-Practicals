import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  Message:string ="Hello";
  Message2:string = "";

  name:string = "Mary";

  pstyle1:string = "background-color:green";
  pstyle2:string = "background-color:red";
  
  sum:number = this.addsum();

  successClass:string = "text-success";

  val1:string = "Hii";
  val2:string = "Bye";
  val3:string = "Click Here";

  haserror:boolean = true;
  

  addsum():number{
    let a:number = 10;
    let b:number = 20;
    return a+b;
  }

  status:boolean = false;

  changeStatus()
  {
    if(this.status == true)
    this.status = false;
    else
    this.status = true;

    if(this.name === "Mary")
    this.name = "John";
    else
    this.name = "Mary";
    
  }

  constructor() { }

  ngOnInit(): void {
    this.Message2 ="Ram"
    
  }

}
