import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/projectModel';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent {

  @Input() project: Project | null = null;
  @Input() main: boolean = false;

  faGithub = faGithub;
  faLink = faLink;

}
