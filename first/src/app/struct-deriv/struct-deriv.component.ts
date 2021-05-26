import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct-deriv',
  templateUrl: './struct-deriv.component.html',
  styleUrls: ['./struct-deriv.component.css']
})
export class StructDerivComponent implements OnInit {

  public status:boolean=true;
  public num:number = 0;

  constructor() { 
    this.status = false;
  }

  ngOnInit(): void {
  }

}
