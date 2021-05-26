import { Component, OnInit } from '@angular/core';
import {Department} from '../Model/department';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  colors = ["Red","Blue","Green","Orange","Yellow"];


  students =[ 
  ["id","Name","Dept","College"],
  [1,"Ram","COMPS","SIES"],
  [2,"Suresh","COMPS","SIES"],
  [3,"Sunil","COMPS","SIES"],
  [4,"Dev","COMPS","SIES"],
  ];

  public departments:Department[] = [
    {id:1,name:"IT"},
    {id:2,name:"HR"},
    {id:3,name:"Sales"},
    {id:4,name:"Finance"},
    {id:5,name:"Enfineering"}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
