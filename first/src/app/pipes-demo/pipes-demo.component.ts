import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {

  public Name:string = "Hello World";
  public tdate = new Date();
  colors = ["Red","Blue","Green","Orange","Yellow"];

  
  constructor() { }

  ngOnInit(): void {
  }

}
