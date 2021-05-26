import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-demo',
  templateUrl: './input-demo.component.html',
  styleUrls: ['./input-demo.component.css']
})
export class InputDemoComponent implements OnInit {

  @Input("abc") public name:string;
  constructor() { }

  ngOnInit(): void {
  }

}
