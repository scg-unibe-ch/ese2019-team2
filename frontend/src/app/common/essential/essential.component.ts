import {Component, Input, OnInit} from '@angular/core';
import {ServiceModel} from '../../models/service.model';

@Component({
   selector: 'app-essential',
   templateUrl: './essential.component.html',
   styleUrls: ['./essential.component.scss'],
})
export class EssentialComponent implements OnInit {

   @Input() service: ServiceModel;

   constructor() {
   }

   ngOnInit() {
   }

}
