import { Component, OnInit } from '@angular/core';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/models/projectModel';
import projectsData from 'src/app/data/projects.json';
import { translate, translateTop } from 'src/app/animations/translateAnimation';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  animations: [
    translate]
})
export class ProjectsComponent {

  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  projects: Project[] = projectsData;

  length: number = this.projects.length;
  previousIndex: number = this.length - 1;
  index: number = 0;
  nextIndex: number = 1;

  distance: number = 100
  toLeft: boolean = true
  state: string = 'start'

  start() {
    this.state = 'start'
    this.distance = 100
  }

  finish() {
    this.state = 'finish'
  }

  showNext() {
    this.previousIndex = this.index
    this.index = this.nextIndex
    this.nextIndex = this.nextIndex == this.length - 1 ? 0 : this.nextIndex + 1;
    this.start();
    this.toLeft = false
  }

  showPrevious() {
    this.nextIndex = this.index
    this.index = this.previousIndex
    this.previousIndex = this.previousIndex === 0 ? this.length - 1 : this.previousIndex - 1;
    this.start();
    this.toLeft = true
  }

  get x() {
    return (this.toLeft ? '-' : '') + this.distance
  }
}
