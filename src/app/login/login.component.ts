import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email]),
      password: new FormControl()
    })
  }

  ngOnInit() {
  }

  loginBtn() {
    console.log(this.loginForm);
  }

}
