import { Component } from '@angular/core';
import { faLinkedin as faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
}
