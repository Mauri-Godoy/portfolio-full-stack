import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/ProjectModel';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent {

  @Input() project: Project | null = null;
  @Input() main: boolean = false;
}
