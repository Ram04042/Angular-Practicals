import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bothside-comp-interac',
  templateUrl: './bothside-comp-interac.component.html',
  styleUrls: ['./bothside-comp-interac.component.css']
})
export class BothsideCompInteracComponent implements OnInit {

  @Input("abc") public name:string;
  @Output() public child = new EventEmitter();

  fireEvent()
  {
    this.child.emit("Hello World Talking from Child to Paarent");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
