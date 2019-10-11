import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-overlay-content',
  templateUrl: './overlay-content.component.html',
  styleUrls: ['./overlay-content.component.scss'],
})
export class OverlayContentComponent implements OnInit {

  private showRegisterComponent: boolean;
  private showLoginComponent: boolean;

  constructor() { }

  ngOnInit() {
    this.showRegisterComponent = true;
    this.showLoginComponent = false;
  }
  onToggleComponentToShow() {
    this.showRegisterComponent = !this.showRegisterComponent;
    this.showLoginComponent = !this.showLoginComponent;
  }
}
