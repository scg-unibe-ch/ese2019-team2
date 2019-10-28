import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-category',
    templateUrl: './category.page.html',
    styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
    private title = '';
    private hasSubcategories: boolean;
    private categories = [
        {title: 'beispiel', imgSrc: 'http://lorempixel.com/480/640/nightlife'},
        {title: 'beispiel2', imgSrc: 'http://lorempixel.com/480/640/cats'}
    ];

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        const categoryName = this.route.snapshot.paramMap.get('categoryName');
        this.title = categoryName;
        this.hasSubcategories = this.categories.length > 0;
    }

}
