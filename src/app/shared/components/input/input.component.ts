import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, RequiredValidator, ValidationErrors } from '@angular/forms';
import { appear } from 'src/app/animations/appearAnimation';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  animations: [
    appear
  ]
})
export class InputComponent {

  @Input() placeholder: string = ""
  @Input() type: 'text' | 'email' | 'submit' = 'text';

  @Input() set control(value: AbstractControl) {
    this.formControl = value;
    this.value = this.formControl.value
  }

  @Input() textArea: boolean = false;
  @Input() maxLength: number = 100;
  @Input() duration: number = .9;

  formControl: AbstractControl = new FormControl();
  value: string = "";

  patchValue() {
    this.formControl.markAsDirty()
    this.formControl?.patchValue(this.value)
  }

  get isInvalid(): boolean {
    return this.formControl.invalid && this.formControl.touched
  }

  get error() {
    let error: string = '.'

    const errors: ValidationErrors | null = this.formControl.errors;

    if (errors) {
      if (errors['required']) error = 'Required'
      else if (errors['email']) error = 'Invalid email'
    }

    return error
  }

  touch() {
    this.formControl.markAsTouched();
  }
}
