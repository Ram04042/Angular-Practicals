import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  //template:`<p>Register Component Using Template</p>
  //<h1>Hii</h1>`,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  bulbStatus:boolean = false;

  onSrc:string="assets/images/on.jpg";
  offSrc:string="assets/images/off.jpg";
  
  changeBulbStatus()
  {
    if(this.bulbStatus == false)
    this.bulbStatus = true;
    else
    this.bulbStatus = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
