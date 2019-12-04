import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SERVICES} from '../../mock-services';
import {SearchService} from '../../services/search/search.service';
import {forEach} from "@angular-devkit/schematics";
import {CreateService} from "../../services/create/create.service";

@Component({
    selector: 'app-category',
    templateUrl: './category.page.html',
    styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

    currenturl;
    services = SERVICES;
    currentcategory;

    constructor(private route: ActivatedRoute, private search: SearchService, private create: CreateService) {
    }

    ionViewWillEnter() {
        this.getCategoryName();
        this.services = this.search.getServicesByCategory(this.currentcategory);
        console.log(this.search.getServicesByCategory(this.currentcategory));
        console.log(this.create.getUserID());
    }

    ngOnInit() {
        /*this.getCategoryName();
        this.services = this.search.getServicesByCategory(this.currentcategory);
        console.log(this.search.getServicesByCategory(this.currentcategory));*/
    }

    getCategoryName() {

        this.currenturl = document.URL;

        for (let s of SERVICES)  {
            if (this.currenturl.match(s.category)) {
                this.currentcategory = s.category;
                console.log(this.currentcategory);
            }
        }

    }
}
