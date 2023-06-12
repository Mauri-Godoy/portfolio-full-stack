import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Constant } from 'src/app/constants/constants';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  form: FormGroup | undefined;
  faUser = faUser;
  faEnvelope = faEnvelope;
  faWhatsapp = faWhatsapp;
  faGithub = faGithub;
  faLinkedIn = faLinkedin;
  whatsappNumber = Constant.WHATSAPP_NUMBER;
  email = Constant.EMAIL;
  linkedinUser = Constant.LINKEDIN_USER;
  githubUser = Constant.GITHUB_USER;
  btnDisabled: boolean = false;

  constructor(private emailService: EmailService, private toastr: ToastrService) { }

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
    else {
      this.btnDisabled = true
      this.emailService.sendEmail(this.form?.value).subscribe(() => {
        this.toastr.success("Email sent successfully")
        this.buildForm()
      }).add(() => this.btnDisabled = false);
    }

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

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text)
  }
}


