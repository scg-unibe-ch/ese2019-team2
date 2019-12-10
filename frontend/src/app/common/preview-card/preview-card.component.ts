import {Component, Input, OnInit} from '@angular/core';
import {ClickUpdaterService} from "../../services/clickUpdater/click-updater.service";

@Component({
   selector: 'app-preview-card',
   templateUrl: './preview-card.component.html',
   styleUrls: ['./preview-card.component.scss'],
})
export class PreviewCardComponent implements OnInit {
   private showSkeleton = true;
   @Input() imgSrc: string;
   @Input() title: string;
   @Input() id: string;

   constructor(private clickUpdater: ClickUpdaterService) {
   }

   ngOnInit() {
   }


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

   increaseClicks(id: string) {
      this.clickUpdater.increaseClicks(id)
          .subscribe(data => {
             console.log(data);
          });
   }
}
