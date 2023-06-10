import { Component, OnInit } from '@angular/core';
import { appear } from 'src/app/animations/appearAnimation';
import { translate, translateTop } from 'src/app/animations/translateAnimation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ],
  animations: [
    translateTop,
    appear
  ]
})
export class HomeComponent {
}
