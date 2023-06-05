import { Component, OnInit } from '@angular/core';
import { faMapMarkedAlt, faGraduationCap, faBrain, faDatabase, faSchool } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faJava } from '@fortawesome/free-brands-svg-icons';
import { translate } from 'src/app/animations/translateAnimation';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styles: [
  ],
  animations: [
    translate
  ]
})
export class PresentationComponent {
  faMap = faMapMarkedAlt;
  faGraduationCap = faGraduationCap;
  faAngular = faAngular;
  faJava = faJava;
  faBrain = faBrain;
  faDatabase = faDatabase;
  faSchool = faSchool;

  displayList: boolean[] = []
  textQuantity: number = 3;
  intervalTime: number = 500;

  constructor() {
    this.displayWithInterval()
  }

  displayWithInterval() {
    let i = 0;

    const intr = setInterval(() => {
      this.displayList.push(true);
      if (++i == this.textQuantity) clearInterval(intr);
    }, this.intervalTime)
  }
}

