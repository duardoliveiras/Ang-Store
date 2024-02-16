import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup;
  
  constructor(private fb: FormBuilder){
    // Validators.required is for required fields and Validators.email is for email format
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)  ]]
    });
  }


  async submit(){
    console.log(this.form.value);
  }

  
}
