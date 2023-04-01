import { Component, Input } from '@angular/core';

@Component({
  selector: 'bar-item',
  templateUrl: './bar-item.component.html',
  styles: [
  ]
})
export class BarItemComponent {

  @Input() redirectUrl: string | undefined;

}
