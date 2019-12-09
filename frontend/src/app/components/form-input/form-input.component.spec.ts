import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {FormInputComponent} from './form-input.component';

describe('FormInputComponent', () => {
   let component: FormInputComponent;
   let fixture: ComponentFixture<FormInputComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [FormInputComponent],
         imports: [IonicModule.forRoot()]
      }).compileComponents();

      fixture = TestBed.createComponent(FormInputComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   }));

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
