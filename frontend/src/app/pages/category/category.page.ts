import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  private title ="";
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    const categoryName = this.route.snapshot.paramMap.get('categoryName');
    this.title = categoryName;

  }

}
