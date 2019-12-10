import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {HomePage} from './home.page';
import {HeaderComponent} from '../../common/header/header.component';
import {SearchbarComponent} from '../../common/searchbar/searchbar.component';
import {SeparatingHeadlineComponent} from '../../common/separating-headline/separating-headline.component';
import {PreviewCardComponent} from '../../common/preview-card/preview-card.component';
import {FooterComponent} from '../../common/footer/footer.component';
import {RouterTestingModule} from '@angular/router/testing';
import {OverlayControllerComponent} from '../../auth/overlay-controller/overlay-controller.component';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {AppComponent} from '../../app.component';
import {MenuComponent} from '../../common/menu/menu.component';
import {AuthModule} from '../../auth/auth.module';

describe('HomePage', () => {
   let component: HomePage;
   let fixture: ComponentFixture<HomePage>;
   let error: HttpErrorResponse;
   let controller: HttpTestingController;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [
            AppComponent,
            HomePage,
            HeaderComponent,
            SearchbarComponent,
            SeparatingHeadlineComponent,
            PreviewCardComponent,
            FooterComponent,
            MenuComponent,
            ],
         imports: [
            IonicModule.forRoot(),
            FormsModule,
            RouterTestingModule,
            HttpClientTestingModule,
            AuthModule
         ],
      }).compileComponents();

      fixture = TestBed.createComponent(HomePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
   }));

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
