import {Component, Input, OnInit} from '@angular/core';

@Component({
   selector: 'app-essential',
   templateUrl: './essential.component.html',
   styleUrls: ['./essential.component.scss'],
})
export class EssentialComponent implements OnInit {

   @Input() service;

   constructor() {
   }

   ngOnInit() {
   }

}
