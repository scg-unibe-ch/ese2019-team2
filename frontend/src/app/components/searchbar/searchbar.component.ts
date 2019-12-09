import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SearchService} from '../../services/search/search.service';
import {StorageService} from '../../services/storage/storage.service';

@Component({
   selector: 'app-searchbar',
   templateUrl: './searchbar.component.html',
   styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit, OnDestroy {

   searchCriteria = [
      {value: 'allCriteria', text: 'all criteria'},
      {value: 'username', text: 'Username'},
      {value: 'serviceName', text: 'Service names'},
      {value: 'category', text: 'Categories'},
      {value: 'subCategory', text: 'Sub-Categories'},
      {value: 'location', text: 'Locations'},
      {value: 'description', text: 'Descriptions'}
   ];
   dropdownVal = null;
   selection = null;
   services = null;
   searchString = null;

   constructor(
      private search: SearchService,
      private router: Router,
      private store: StorageService
   ) {
   }

   ngOnInit() {

   }

   onSubmit(searchString: string) {
      this.searchString = searchString;
      if (searchString !== '') {
         if (this.dropdownVal === 'allCriteria' || this.dropdownVal === null) {
            // full text search -> mongodb

         } else {
            // selective search -> services controller
            console.log(this.dropdownVal);
            this.search.searchServicesBy(this.dropdownVal, searchString)
               .subscribe(data => {
                  console.log(data);
                  this.services = data;
                  // this.router.navigate(['/search']);
               });
         }
      }
   }

   onDropdownChange(val: any) {
      this.dropdownVal = val;
      if (this.searchString !== null) {
         this.onSubmit(this.searchString);
      }
   }

   clean() {
      this.searchString = null;
      this.services = null;
      this.onDropdownChange(this.dropdownVal);
   }

   ngOnDestroy() {
      this.searchString = null;
      this.onDropdownChange(this.dropdownVal);
      this.services = null;
   }

}
