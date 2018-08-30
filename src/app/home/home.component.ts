import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity: 0}),
        animate(200, style({opacity: 1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(200, style({opacity: 0}))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  camImageHovered = false;
  artImageHovered = false;
  webdevImageHovered = false;
  screenSizeSmall: boolean;


  public innerWidth: any;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (innerWidth <= 568) {
      this.screenSizeSmall = true;
    } else {
      this.screenSizeSmall = false;
    }
  }

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 568) {
      this.screenSizeSmall = true;
    } else {
      this.screenSizeSmall = false;
    }
  }

  camHovered() {
    this.camImageHovered = !this.camImageHovered;
  }

  artHovered() {
    this.artImageHovered = !this.artImageHovered;
  }

  webdevHovered() {
    this.webdevImageHovered = !this.webdevImageHovered;
  }

}
