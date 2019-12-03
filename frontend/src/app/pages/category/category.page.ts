import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SERVICES} from '../../mock-services';
import {SearchService} from '../../services/search/search.service';

@Component({
    selector: 'app-category',
    templateUrl: './category.page.html',
    styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

    currenturl = '';
    services = SERVICES;
    category = 'Catering';

    constructor(private route: ActivatedRoute, private search: SearchService) {
    }

    ngOnInit() {
        this.getCategoryName();
        this.search.getServicesByCategory(this.category);
    }

    getCategoryName() {

        this.currenturl = document.URL;

    }
}
