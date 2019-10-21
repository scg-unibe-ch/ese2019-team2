import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {alphabeticOnlyValidator, passwordValidator} from '../../register/register-form/CustomValidator';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
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
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    }, {});
  }

  onSubmit(value: any) {
    // TODO: check id from database
    this.userService.loginUser(id, this.loginForm.get('password'));
  }
}
