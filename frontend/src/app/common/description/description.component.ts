import {Component, Input, OnInit} from '@angular/core';
import {ServiceModel} from '../../models/service.model';

@Component({
   selector: 'app-description',
   templateUrl: './description.component.html',
   styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {

   @Input() service: ServiceModel;

   constructor() {
   }

   ngOnInit() {
   }

}
