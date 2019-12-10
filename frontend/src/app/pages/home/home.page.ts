import {Component, OnInit} from '@angular/core';
import {CATEGORIES} from '../../categories';
import {SearchService} from '../../services/search/search.service';

@Component({
   selector: 'app-home',
   templateUrl: 'home.page.html',
   styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

   categories = null;

   constructor(private search: SearchService) {
   }

   ngOnInit(): void {
      this.search.getAllCategories()
          .subscribe(data => {
             console.log(data);
             this.categories = data;
          });
   }

}
