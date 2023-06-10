import { Component, OnInit } from '@angular/core';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/models/ProjectModel';
import projectsData from 'src/app/data/projects.json';
import { translate, translateRight, translateTop } from 'src/app/animations/translateAnimation';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  animations: [
    translate,
    translateRight,
    translateTop
  ]
})
export class ProjectsComponent {

  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  projects: Project[] = projectsData;

  length: number = this.projects.length;
  previousIndex: number = this.length - 1;
  index: number = 0;
  nextIndex: number = 1;


  showNext() {
    this.previousIndex = this.index
    this.index = this.nextIndex
    this.nextIndex = this.nextIndex == this.length - 1 ? 0 : this.nextIndex + 1;
  }

  showPrevious() {
    this.nextIndex = this.index
    this.index = this.previousIndex
    this.previousIndex = this.previousIndex === 0 ? this.length - 1 : this.previousIndex - 1;
  }
}
