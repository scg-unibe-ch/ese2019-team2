import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {passwordValidator, alphabeticOnlyValidator} from '../../customValidator';
import {AuthService} from '../../services/authentication/auth.service';
import {PopoverController} from '@ionic/angular';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {isUndefined} from 'util';

@Component({
   selector: 'app-register-form',
   templateUrl: './register-form.component.html',
   styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {

   errorMessage = '';
   registerForm: FormGroup;
   validationMessages = {
      lastName: [
         {type: 'required', message: 'This field can\'t be empty.'},
         {type: 'nonalphabeticChars', message: 'The name can only contain alphabetic chars.'}
      ],
      firstName: [
         {type: 'required', message: 'This field can\'t be empty.'},
         {type: 'nonalphabeticChars', message: 'The name can only contain alphabetic chars.'}
      ],
      email: [
         {type: 'required', message: 'This field can\'t be empty.'},
         {type: 'email', message: 'Please enter a valid email address.'}
      ],
      username: [
         {type: 'required', message: 'This field can\'t be empty.'}
      ],
      password: [
         {type: 'required', message: 'This field can\'t be empty.'},
         {type: 'minlength', message: 'Password has to be at least 6 chars long.'},
         {
            type: 'passwordUpperLowerCaseRestriction',
            message: 'The password has to contain at least an Upper- and a Lowercase character.'
         },
         {
            type: 'passwordSpecialCharRestriction',
            message: 'The password has to contain at least one digit or special character.'
         },
         {type: 'passwordSpaceRestriction', message: 'The password can\'t contain a space'}
      ],
      role: [
         {type: 'required'}
      ]
   };

   constructor(private formBuilder: FormBuilder, private auth: AuthService, private popCtrl: PopoverController, private router: Router) {
   }

   ngOnInit() {
      this.registerForm = this.formBuilder.group({
         lastName: ['', [Validators.required, alphabeticOnlyValidator]],
         firstName: ['', [Validators.required, alphabeticOnlyValidator]],
         userName: ['', [Validators.required]],
         email: ['', [Validators.required, Validators.email]],
         password: ['', [Validators.required, Validators.minLength(6), passwordValidator]],
         role: ['', [Validators.required]]
      }, {});
   }

   onSubmit(value: any) {
      const lastName = this.registerForm.get('lastName').value;
      const firstName = this.registerForm.get('firstName').value;
      const email = this.registerForm.get('email').value;
      const userName = this.registerForm.get('userName').value;
      const password = this.registerForm.get('password').value;
      const role = this.registerForm.get('role').value;
      const loginResponse = this.auth.register(lastName, firstName, email, userName, password, role);
      loginResponse.pipe(first())
         .subscribe(data => {
            this.popCtrl.getTop().then(overlay => {
               if (!isUndefined(overlay)) {
                  this.popCtrl.dismiss();
               }
            });
            this.router.navigate(['/profile']);
         }, err => {
            this.errorMessage = err.error.error;
            this.registerForm.get('password').reset();
         });
   }
}
