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

    currenturl = null;
    services = null;
    currentcategory = null;

    constructor(private route: ActivatedRoute, private search: SearchService, private create: CreateService) {
    }

    ngOnInit() {
        this.getCategoryName();
        this.search.getServicesByCategory(this.currentcategory)
            .subscribe(data => {
                console.log(data);
                this.services = data;
            });
    }

    getCategoryName() {

        this.currenturl = document.URL;

        for (let category of CATEGORIES)  {
            if (this.currenturl.match(category.name)) {
                this.currentcategory = category.name;
                console.log(this.currentcategory);
            }
        }

    }
}
