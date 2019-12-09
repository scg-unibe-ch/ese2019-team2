import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {alphabeticOnlyValidator, passwordValidator} from '../../../CustomValidator';
import {AuthService} from '../../auth-service/auth.service';
import {first} from 'rxjs/operators';
import {ViewController} from '@ionic/core';
import {PopoverController} from '@ionic/angular';
import {Router} from '@angular/router';
import {isUndefined} from 'util';
import {CreateService} from '../../../services/create/create.service';
import {StorageService} from '../../../services/storage/storage.service';

@Component({
   selector: 'app-login-form',
   templateUrl: './login-form.component.html',
   styleUrls: ['./login-form.component.scss'],
   providers: [AuthService]
})
export class LoginFormComponent implements OnInit {
   loginForm: FormGroup;
   showWrongCredentials = false;
   validationMessages = {
      username: [
         {type: 'required', message: 'This field can\'t be empty.'},
         {type: 'nonalphabeticChars', message: 'The name can only contain alphabetic chars.'}
      ],
      password: [
         {type: 'required', message: 'This field can\'t be empty.'},
         {type: 'nonalphabeticChars', message: 'The name can only contain alphabetic chars.'}
      ]
   };

   constructor(
      private formBuilder: FormBuilder,
      private auth: AuthService,
      private popCtrl: PopoverController,
      private router: Router,
      private creator: CreateService,
      private storage: StorageService
   ) {
   }

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
            this.showWrongCredentials = false;
            this.popCtrl.getTop().then(overlay => {
               if (!isUndefined(overlay)) {
                  this.popCtrl.dismiss();
               }
            });
            this.router.navigate(['/']);
         }, error => {
            this.showWrongCredentials = true;
            this.loginForm.get('password').reset();
            console.log(error);
         });
   }
}
