import { Component } from '@angular/core';
import { faUser, faHome, faCode, faAddressBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {
  faHome = faHome;
  faUser = faUser;
  faCode = faCode;
  faAddressBook = faAddressBook;

}
