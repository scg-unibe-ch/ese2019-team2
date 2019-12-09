import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {OverlayControllerComponent} from './overlay-controller.component';

describe('OverlayControllerComponent', () => {
   let component: OverlayControllerComponent;
   let fixture: ComponentFixture<OverlayControllerComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [OverlayControllerComponent],
         imports: [IonicModule.forRoot()]
      }).compileComponents();

      fixture = TestBed.createComponent(OverlayControllerComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   }));

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
