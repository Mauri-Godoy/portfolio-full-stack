import { Component, Input } from '@angular/core';
import { translateTop } from 'src/app/animations/translateAnimation';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  animations: [
    translateTop
  ]
})
export class TooltipComponent {

  @Input() text: string | undefined = undefined;
  @Input() duration: number = .9;
}
