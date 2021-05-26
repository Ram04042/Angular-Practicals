import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-demo',
  templateUrl: './output-demo.component.html',
  styleUrls: ['./output-demo.component.css']
})
export class OutputDemoComponent implements OnInit {

  @Output() public child = new EventEmitter();

  fireEvent()
  {
    this.child.emit("Hello World Talking from Child to Paarent");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
