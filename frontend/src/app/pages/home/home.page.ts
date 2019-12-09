import {Component} from '@angular/core';
import {CATEGORIES} from '../../categories';
import {AuthService} from '../../services/authentication/auth.service';
import {CreateService} from '../../services/create/create.service';
import {StorageService} from '../../services/storage/storage.service';

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
