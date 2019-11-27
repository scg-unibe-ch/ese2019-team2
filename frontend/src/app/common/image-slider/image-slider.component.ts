import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-image-slider',
    templateUrl: './image-slider.component.html',
    styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent {

    slideOpts = {
        initialSlide: 1,
        speed: 400
    };

    constructor() {
    }
}
