import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  form: FormGroup | undefined;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      name: new FormControl(null, Validators.required),
      subject: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.form?.value);
  }

  get emailField(): AbstractControl | any {
    return this.form?.get('email')
  }

  get nameField(): AbstractControl | any {
    return this.form?.get('name')
  }

  get subjectField(): AbstractControl | any {
    return this.form?.get('subject')
  }
}
