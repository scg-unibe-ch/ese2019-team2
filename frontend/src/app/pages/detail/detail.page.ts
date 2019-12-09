import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchService} from '../../services/search/search.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit, OnDestroy {

  service = null;
  currentURL = null;
  currentServiceID = null;
  title = null;

  constructor(private search: SearchService) { }

  ngOnInit() {
    this.getServiceIDByURL();
    this.search.getServiceDetail(this.currentServiceID)
        .subscribe(data => {
          console.log(data);
          this.service = data;
       });

  }

  ngOnDestroy(): void {
    this.currentServiceID = null;
    this.currentURL = null;
  }

  getServiceIDByURL() {
    this.currentURL = document.URL;

    let splitString: any[];
    splitString = this.currentURL.toString().split('/');

    this.currentServiceID = splitString[splitString.length - 1];
    console.log(this.currentServiceID);
  }

}
