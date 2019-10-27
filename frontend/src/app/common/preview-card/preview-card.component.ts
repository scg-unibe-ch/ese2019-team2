import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-preview-card',
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.scss'],
})
export class PreviewCardComponent implements OnInit {
  private showSkeleton = true;
  @Input() imgSrc: string;
  @Input() title: string;
  constructor() { }

  ngOnInit() {  }


  onImageLoadError($event) {
    $event.target.parentElement.innerHTML = `:(<br>Could not load image.<br>Try again later`;
    this.hideSkeleton();
  }

  onImageLoadSuccess() {
    this.hideSkeleton();
  }

  hideSkeleton() {
    this.showSkeleton = false;
  }
}
