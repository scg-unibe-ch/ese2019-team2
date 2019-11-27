import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SERVICES} from '../../mock-services';

@Component({
    selector: 'app-category',
    templateUrl: './category.page.html',
    styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

    services = SERVICES;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
    }
}
