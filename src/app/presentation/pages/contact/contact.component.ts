import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  form: FormGroup | undefined;
  faUser = faUser;
  faEnvelope = faEnvelope;

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      mail: new FormControl(null, [Validators.required, Validators.email]),
      name: new FormControl(null, Validators.required),
      message: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    if (this.form?.invalid)
      this.form.markAllAsTouched()
    else this.emailService.sendEmail(this.form?.value).subscribe(() => this.buildForm());

  }

  get mailField(): AbstractControl | any {
    return this.form?.get('mail')
  }

  get nameField(): AbstractControl | any {
    return this.form?.get('name')
  }

  get messageField(): AbstractControl | any {
    return this.form?.get('message')
  }
}


