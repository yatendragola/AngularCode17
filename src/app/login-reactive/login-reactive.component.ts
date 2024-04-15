import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { createpasswordStrengthValidator } from "../validators/password-strength.validator";


@Component({
  selector: 'login',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})

export class LoginReactiveComponent implements OnInit {

  /*email = new FormControl('',
        {
          validators:[Validators.required, Validators.email],
          updateOn:'blur' 
        });
  
  password = new FormControl('',
        {
          validators:[
            Validators.required,
            Validators.minLength(8),
            createpasswordStrengthValidator()
          ]

        });*/

 /* form = new FormGroup({

    email: this.email,
    password: this.password
  });*/

  form = this.fb.group({
    
    email: ['',{
      validators:[Validators.required, Validators.email],
      updateOn:'blur'
    }],
    password: ['',[Validators.required, Validators.minLength(8),createpasswordStrengthValidator()]]
    /*email: this.fb.nonNullable.control("",{
      validators:[Validators.required, Validators.email],
      updateOn:'blur'
    }),
    password: this.fb.nonNullable.control("",{
      validators:[Validators.required, Validators.minLength(8),createpasswordStrengthValidator()]
    })*/
  });

  constructor(private fb:NonNullableFormBuilder) {


  }

  ngOnInit() {

  }
  get email() {
    return this.form.controls['email'];
  }
  get password(){
    return this.form.controls['password'];
  }

  login(){

    const formValue = this.form.value;

    console.info(formValue.email);
    console.info(formValue.password);

  }
  reset(){

    this.form.reset();
    console.info(this.form.value);

  }
}
