import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-demo',
  templateUrl: './two-way-binding-demo.component.html',
  styleUrls: ['./two-way-binding-demo.component.css']
})
export class TwoWayBindingDemoComponent implements OnInit {

  public name ="Adam";
  public email ="Sam@gmail.com";
  
  constructor() { }

  ngOnInit(): void {
  }

}
