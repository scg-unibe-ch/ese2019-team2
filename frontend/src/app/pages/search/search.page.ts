import {Component, OnInit} from '@angular/core';
import {SearchbarModule} from '../../components/searchbar/searchbar.module';

@Component({
   selector: 'app-search',
   templateUrl: './search.page.html',
   styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

   dropdownVal;

   constructor() {
   }

   ngOnInit() {

   }

   loadServices() {

   }

   /*
     onSubmit(searchString: string) {
       if (searchString !== '') {
         if (this.dropdownVal === 'allCriteria' || this.dropdownVal === null) {
           // full text search -> mongodb
   
         } else {
           // selective search -> services controller
           console.log(this.dropdownVal);
           this.search.searchServicesby(this.dropdownVal, searchString)
               .subscribe(data => {
                 console.log(data);
                 this.store.setServices(data);
                 this.router.navigate(['/search']);
               });
         }
       }
     }
   
     onDropdownChange(val: any) {
       this.dropdownVal = val;
     }
   
     ngOnDestroy() {}
   */
}
