import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-validation',
  templateUrl: './tdf-validation.component.html',
  styleUrls: ['./tdf-validation.component.css']
})
export class TdfValidationComponent implements OnInit {

  contact:contact;

  constructor() { }

  ngOnInit(): void {

    this.contact = { 
      firstname:"",
      lastname:"",
      gender:"",
      isToc:true,
      email:"",
    };
 
    
  }

  onSubmit(contactForm)
  {
    console.log(contactForm.value);
  }
  
}

export class contact {
  firstname:string;
  lastname:string;
  gender:string;
  isToc:boolean;
  email:string;
}
