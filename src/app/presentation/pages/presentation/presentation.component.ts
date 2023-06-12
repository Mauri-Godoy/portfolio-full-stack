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

  durationList: number[] = [2, 3, 4, 5]

  state: string = "start"

  onEnd(event: { toState: string; }) {
    if (event.toState === 'start')
      this.state = 'finish';
  }
}

