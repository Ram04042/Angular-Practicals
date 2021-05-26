import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    rememberme: new FormControl(false)
    
  })

  get username()
  {
    return this.loginForm.get('username');
  }

  get password()
  {
    return this.loginForm.get('password');
  }

  get rememberme()
  {
    return this.loginForm.get('rememberme');
  }

  onSubmit()
  {
    console.log(this.loginForm.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

export class loginDetails
{
  username:string;
  password:string;
  rememberme:boolean;
}
