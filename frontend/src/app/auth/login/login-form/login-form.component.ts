import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {alphabeticOnlyValidator, passwordValidator} from '../../register/register-form/CustomValidator';
import {AuthService} from '../../auth-service/auth.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [AuthService]
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  validationMessages = {
    username: [
      { type: 'required', message: 'This field can\'t be empty.'},
      { type: 'nonalphabeticChars', message: 'The name can only contain alphabetic chars.'}
    ],
    password: [
      { type: 'required', message: 'This field can\'t be empty.'},
      { type: 'nonalphabeticChars', message: 'The name can only contain alphabetic chars.'}
    ]
  };
  constructor(private formBuilder: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    }, {});
  }

  onSubmit(value: any) {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    const loginResponse = this.auth.login(username, password);
    loginResponse.pipe(first())
        .subscribe(data => {
            console.log(data);
        }, error => {
          console.log(error);
        });
  }
}
