import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayControllerComponent} from './overlay-controller/overlay-controller.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {OverlayContentComponent} from './overlay-content/overlay-content.component';
import {RegisterFormComponent} from './register/register-form/register-form.component';
import {LoginFormComponent} from './login/login-form/login-form.component';
import {FormInputComponent} from './form-input/form-input.component';
import { UserService } from '../user.service';



@NgModule({
  entryComponents: [OverlayControllerComponent, OverlayContentComponent],
  declarations: [
    OverlayControllerComponent,
    OverlayContentComponent,
    RegisterFormComponent,
    LoginFormComponent,
    FormInputComponent,
  ],
  exports: [
    OverlayControllerComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
      UserService
  ]
})
export class AuthModule { }
