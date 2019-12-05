import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SERVICES} from '../../mock-services';
import {SearchService} from '../../services/search/search.service';
import {forEach} from '@angular-devkit/schematics';
import {CreateService} from '../../services/create/create.service';
import {CATEGORIES} from '../../categories';
import {ServiceModel} from '../../models/service.model';

@Component({
    selector: 'app-category',
    templateUrl: './category.page.html',
    styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

    currentURL = null;
    services = null;
    currentCategory = null;

    constructor(private route: ActivatedRoute, private search: SearchService, private create: CreateService) {
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
        this.currentCategory = this.currentURL.toString().replace('http://localhost:8100/category/', '');

        /*for (let category of CATEGORIES)  {
            if (this.currentURL.match(category.name)) {
                this.currentCategory = category.name;
                console.log(this.currentCategory);
            }
        }*/

    }
}
