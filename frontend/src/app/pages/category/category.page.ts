import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../../services/search/search.service';
import {CreateService} from '../../services/create/create.service';
import {ClickUpdaterService} from "../../services/clickUpdater/click-updater.service";

@Component({
   selector: 'app-category',
   templateUrl: './category.page.html',
   styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

   currentURL = null;
   services = null;
   currentCategory = null;

   constructor(
       private route: ActivatedRoute,
       private search: SearchService
   ) {
   }

   ngOnInit() {
      this.getCategoryName();
      this.search.getServicesByCategory(this.currentCategory)
         .subscribe(data => {
            console.log(data);
            this.services = data;
         });
   }

   getCategoryName() {
      this.currentURL = document.URL;

      let splitString: any[];
      splitString = this.currentURL.toString().split('/');

      this.currentCategory = splitString[splitString.length - 1];
      console.log(this.currentCategory);
   }
}
