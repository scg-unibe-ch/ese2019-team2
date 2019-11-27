import {Component, OnInit} from '@angular/core';
import {ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';

@Component({
    selector: 'app-image-slider',
    templateUrl: './image-slider.component.html',
    styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent {

    @ViewChild(IonSlides, {static: true}) ionSlides: IonSlides;

    slideOpts = {
        initialSlide: 1,
        speed: 400
    };
    slidePrev() {
        this.ionSlides.slidePrev();
    }

    slideNext() {
        this.ionSlides.slideNext();
    }

    constructor() {
    }
}
