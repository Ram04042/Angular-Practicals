import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CRUDService } from '../crud.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    Email_ID: new FormControl('',[Validators.required]),
    Password: new FormControl('',[Validators.required]),
    rememberme: new FormControl(false)
    
  })

  get Email_ID()
  {
    return this.loginForm.get('Email_ID');
  }

  get Password()
  {
    return this.loginForm.get('Password');
  }

  get rememberme()
  {
    return this.loginForm.get('rememberme');
  }

  onSubmit()
  {
    console.log(this.loginForm.value);
    this.crudService.check(this.loginForm.value).subscribe(res => {
      console.log(res);
      if(res.message === "Successfull")
      {
        this.router.navigateByUrl('')
      }
      else
      {
        //this.Display Error Message
      }
    });
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public crudService: CRUDService) { }

  ngOnInit(): void {
  }
}


