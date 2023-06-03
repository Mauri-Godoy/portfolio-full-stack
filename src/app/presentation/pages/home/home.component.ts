import { Component, OnInit } from '@angular/core';
import { appear } from 'src/app/animations/appearAnimation';
import { translate } from 'src/app/animations/translateAnimation';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ],
  animations: [
    translate,
    appear
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
