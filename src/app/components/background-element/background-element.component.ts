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
  @Input() minX: number = 0
  @Input() minY: number = 0


  state: string | undefined;

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

  ngOnInit(): void {
    this.setAnimationParams()
    this.state = 'in'
  }

  setAnimationParams() {
    this.y = NumberUtils.getRandomInt(0, 100)
    this.x = NumberUtils.getRandomInt(0, 100)
    this.inX = NumberUtils.getRandomInt(this.minX, this.minX + 25)
    this.inY = NumberUtils.getRandomInt(this.minY, this.minY + 25)
    this.duration = NumberUtils.getRandomInt(310, 500)

    if (this.y > this.x) {
      this.y = 90
    }
    else {
      this.x = 90
    }
  }
}
