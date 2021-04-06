import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, } from '@angular/forms';
 import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  info: any;

  
  constructor(private formBuilder: FormBuilder) {
    this.info = this.formBuilder.group({
      user_name: '',
      user_email: '',
      password_group: '',
      user_password: '',
      user_confirmPassword:'',
      user_phone:'',
      user_gender:'',
      user_city:'',
      user_notification:''
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(values: any){
    console.warn("Form Submit", values)
    }

}