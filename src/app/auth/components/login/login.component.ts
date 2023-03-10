import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form:FormGroup = this.formBuilder.group({
    username: ["", [Validators.required, Validators.minLength(10)]],
    password: ["", [Validators.required]]
  })

  constructor(private formBuilder: FormBuilder) {}

  get username() {
    return this.form.get("username")
  }

  get password() {

    return this.form.get("password")
  }


  onSubmit() {
    if(this.form.valid) {
      console.log(this.form.value)

    }
  }
}
