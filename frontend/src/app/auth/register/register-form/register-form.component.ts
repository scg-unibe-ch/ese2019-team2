import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { passwordValidator, alphabeticOnlyValidator } from './CustomValidator';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;
  validationMessages = {
    lastName: [
      { type: 'required', message: 'This field can\'t be empty.'},
      { type: 'nonalphabeticChars', message: 'The name can only contain alphabetic chars.'}
    ],
    firstName: [
      { type: 'required', message: 'This field can\'t be empty.'},
      { type: 'nonalphabeticChars', message: 'The name can only contain alphabetic chars.'}
    ],
    email: [
      { type: 'required', message: 'This field can\'t be empty.'},
      { type: 'email', message: 'Please enter a valid email address.'}
    ],
    username: [
      { type: 'required', message: 'This field can\'t be empty.'}
    ],
    password: [
      { type: 'required', message: 'This field can\'t be empty.'},
      { type: 'minlength', message: 'Password has to be at least 6 chars long.'},
      { type: 'passwordUpperLowerCaseRestriction', message: 'The password has to contain at least an Upper- and a Lowercase character.' },
      { type: 'passwordSpecialCharRestriction', message: 'The password has to contain at least one digit or special character.' },
      { type: 'passwordSpaceRestriction', message: 'The password can\'t contain a space' }
    ]
  };

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      lastName: ['', [Validators.required, alphabeticOnlyValidator]],
      firstName: ['', [Validators.required, alphabeticOnlyValidator]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), passwordValidator]]
    }, {});
  }

  onSubmit(value: any) {
    this.userService.registerUser(
        this.registerForm.get('lastName'),
        this.registerForm.get('firstName'),
        this.registerForm.get('email'),
        this.registerForm.get('username'),
        this.registerForm.get('password'));
  }
}
