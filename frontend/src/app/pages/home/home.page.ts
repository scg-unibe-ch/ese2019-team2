import {Component} from '@angular/core';
import {CATEGORIES} from '../../categories';

@Component({
   selector: 'app-home',
   templateUrl: 'home.page.html',
   styleUrls: ['home.page.scss'],
})
export class HomePage {

   categories = CATEGORIES;

   constructor() {
   }

}
