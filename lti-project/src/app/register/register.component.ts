import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern('^[A-Za-z0-9]*$')]),
    password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])([a-zA-Z0-9!@#$%^&*]){8,20}$")]),
    email: new FormControl('',[Validators.required,Validators.email]),
    city: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]*$")]),
    mobileno: new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern("^[0-9]*$")])
  })

  get username()
  {
    return this.regForm.get('username');
  }

  get password()
  {
    return this.regForm.get('password');
  }

  get email()
  {
    return this.regForm.get('email');
  }

  get city()
  {
    return this.regForm.get('city');
  }

  get mobileno()
  {
    return this.regForm.get('mobileno');
  }

  onSubmit()
  {
    console.log(this.regForm.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

export class regDetails
{
  username:string;
  password:string;
  email:string;
  city:string;
  mobileno:string;
}
