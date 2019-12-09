import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchService} from '../../services/search/search.service';
import {Router} from '@angular/router';

@Component({
   selector: 'app-searchbar',
   templateUrl: './searchbar.component.html',
   styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit, OnDestroy {

   searchCriteria = [
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
   message = null;

   constructor(
      private search: SearchService,
      private router: Router
   ) {
   }

   ngOnInit() {
      this.onDropdownChange('username');
   }

   onSubmit(searchString: string) {
      this.searchString = searchString;
      if (searchString !== '') {
         // selective search -> services controller
         console.log(this.dropdownVal);
         this.search.searchServicesby(this.dropdownVal, searchString)
            .subscribe(data => {
               console.log(data);
               this.services = data;
               // this.router.navigate(['/search']);
            });
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
