import { Component } from '@angular/core';
import { faLinkedin as faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Constant } from 'src/app/constants/constants';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  linkedinUser = Constant.LINKEDIN_USER;
  githubUser = Constant.GITHUB_USER;
}
