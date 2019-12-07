import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-separating-headline',
  templateUrl: './separating-headline.component.html',
  styleUrls: ['./separating-headline.component.scss'],
})
export class SeparatingHeadlineComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {}

}
