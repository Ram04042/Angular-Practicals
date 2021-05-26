import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CRUDService } from '../crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public crudService: CRUDService
  ){ }


  regForm = new FormGroup({
    Name: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]*$")]),
    Email_ID: new FormControl('',[Validators.required,Validators.email]),
    Phone_No: new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern("^[0-9]*$")]),
    DOB: new FormControl('',[Validators.required]),
    Address: new FormControl('',[Validators.required]),
    Password: new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])([a-zA-Z0-9!@#$%^&*]){8,20}$")])
  })

  get Name()
  {
    return this.regForm.get('Name');
  }

  get Password()
  {
    return this.regForm.get('Password');
  }

  get Email_ID()
  {
    return this.regForm.get('Email_ID');
  }

  get Phone_No()
  {
    return this.regForm.get('Phone_No');
  }

  get DOB()
  {
    return this.regForm.get('DOB');
  }

  get Address()
  {
    return this.regForm.get('Address');
  }


  onSubmit()
  {
    
    console.log(this.regForm.value);
  }


  ngOnInit() {
  }

  submitForm() {
    this.crudService.create(this.regForm.value).subscribe(res => {
      console.log('User Registrations created!'),
      this.router.navigateByUrl('')
    });
  }

}
