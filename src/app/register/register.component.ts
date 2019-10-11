import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  img = 'assets/img/examples/download.png';
  constructor() {this.registerForm = new FormGroup({
    email: new FormControl('', [Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern(/^-?([a-zA-Z])?$/)]),
    phone: new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    picture: new FormControl('',[Validators.required]),
    firstname: new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern(/^-?([a-zA-Z])?$/)]),
    lastname: new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern(/^-?([a-zA-Z])?$/)]),
    confirm: new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern(/^-?([a-zA-Z])?$/)]),
  }) }

  ngOnInit() {

  }
  handleClick(event) {
    console.log(event);
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (event: any) => {
      this.img = event.target.result;
    };

  }
  registerBtn() {
    console.log(this.registerForm);
  }
}
