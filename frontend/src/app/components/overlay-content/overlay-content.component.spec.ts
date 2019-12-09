import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {OverlayContentComponent} from './overlay-content.component';

describe('OverlayContentComponent', () => {
   let component: OverlayContentComponent;
   let fixture: ComponentFixture<OverlayContentComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [OverlayContentComponent],
         imports: [IonicModule.forRoot()]
      }).compileComponents();

      fixture = TestBed.createComponent(OverlayContentComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   }));

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
