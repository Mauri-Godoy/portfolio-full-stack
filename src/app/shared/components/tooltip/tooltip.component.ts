import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html'
})
export class TooltipComponent {

  @Input() bottom: number = 4;
  @Input() text: string | undefined = undefined;

}
