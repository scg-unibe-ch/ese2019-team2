import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent {
  @Input('validationMessages') validationMessages: any;
  @Input('registerForm') registerForm: FormGroup;
  @Input() givenName: string;
  @Input() text: string;
  @Input() type = 'text';
  @Input() inputMode = 'text';

  constructor() {  }


  inputChange(evt: any) {
    if (this.type === 'password') {
      evt.preventDefault();
    }
  }
}
