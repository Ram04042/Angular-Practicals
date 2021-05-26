import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.css']
})
export class ReactiveFormValidationComponent implements OnInit {

  contactForm = new FormGroup({
    firstname: new FormControl('',[Validators.required,Validators.minLength(10)]),
    lastname: new FormControl('',[Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]),
    email:new FormControl('',[Validators.email,Validators.required]),
    gender: new FormControl('',[Validators.required]),
    isMarried: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required]),
    address:new FormGroup({
      city: new FormControl('',[Validators.required]),
      street: new FormControl('',[Validators.required]),
      pincode:new FormControl('',[Validators.required])
    })
  })

  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  get firstname() {
    return this.contactForm.get('firstname');
  } 
 
  get lastname() {
    return this.contactForm.get('lastname');
  } 
 
  get email() {
    return this.contactForm.get('email');
  } 
 
  get gender() {
    return this.contactForm.get('gender');
  } 
 
  get isMarried() {
    return this.contactForm.get('isMarried');
  } 
 
  get country() {
    return this.contactForm.get('country');
  } 
 
  get city() {
    return this.contactForm.get("address").get('city');
  } 
 
  get street() {
    return this.contactForm.get("address").get('street');
  } 
 
  get pincode() {
    return this.contactForm.get("address").get('pincode');
  }
  
  onSubmit() {
    let cobj:contact;
    cobj = this.contactForm.value;

    console.log(cobj.isMarried);
  }
  


}

export class contact {
  firstname:string;
  lastname:string;
  gender:string;
  isMarried:boolean;
  country:string;
  address: {
  city:string;
  street:string;
  pincode:string;
  }
} 
 
export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
