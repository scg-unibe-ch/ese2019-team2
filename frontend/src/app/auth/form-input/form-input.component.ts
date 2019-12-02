import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements OnInit {
  @Input('validationMessages') validationMessages: any;
  @Input('registerForm') registerForm: FormGroup;
  @Input() givenName: string;
  @Input() text: string;
  @Input() type = 'text';
  @Input() inputMode = 'text';

  isPassword = false;
  isRole = false;
  isShowingPw = false;
  get isHidingPw() {
    return !this.isShowingPw;
  }

  constructor() {
   }

   ngOnInit() {
    this.isPassword = this.type === 'password';
    this.isRole = this.type === 'role';
   }


  inputChange(evt: any) {
    if (this.type === 'password') {
      evt.preventDefault();
    }
  }

  showPassword(bool: boolean) {
    this.type = bool ? 'text' : 'password';
    this.isShowingPw = bool;
  }
}
