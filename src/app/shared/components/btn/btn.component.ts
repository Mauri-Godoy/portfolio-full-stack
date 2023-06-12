import { Component, Input, OnInit } from '@angular/core';
import { appear } from 'src/app/animations/appearAnimation';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  animations: [
    appear
  ]
})
export class BtnComponent {

  @Input() type: 'button' | 'submit' = 'button';
  @Input() duration: number = 1;
  @Input() disabled: boolean = false;

}
