import { Component, Input, OnInit } from '@angular/core';
import { bounce } from 'src/app/animations/bounceAnimation';
import { NumberUtils } from 'src/app/utils/numberUtils';

@Component({
  selector: 'app-background-element',
  templateUrl: './background-element.component.html',
  animations: [bounce]
})
export class BackgroundElementComponent {

  @Input() src: string | undefined;

  state: string = 'in';

  x: number = 0;
  y: number = 0;
  inX: number = 0;
  inY: number = 0;
  duration: number = 0;
  timeout: number = 0;

  onEnd(event: { toState: string; }) {
    this.state = 'in';
    if (event.toState === 'in') {
      this.state = 'out';
      this.setAnimationParams()
    }
  }

  constructor() {
    this.setAnimationParams()
  }

  setAnimationParams() {
    this.y = NumberUtils.getRandomInt(0, 100)
    this.x = NumberUtils.getRandomInt(0, 100)
    this.inX = NumberUtils.getRandomInt(0, 100)
    this.inY = NumberUtils.getRandomInt(0, 100)
    this.duration = NumberUtils.getRandomInt(80, 120)

    if (this.y > this.x) {
      this.inY = -28
      this.y = 90
    }
    else {
      this.inX = -28
      this.x = 90
    }
  }
}
