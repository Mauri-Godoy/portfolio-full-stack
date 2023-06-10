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
  @Input() control: AbstractControl = new FormControl();
  @Input() textArea: boolean = false;
  @Input() maxLength: number = 100;
  @Input() duration: number = .9;

  value: string = this.control.value

  patchValue() {
    this.control.markAsDirty()
    this.control?.patchValue(this.value)
  }

  get isInvalid(): boolean {
    return this.control.invalid && this.control.touched
  }

  get error() {
    let error: string = '.'

    const errors: ValidationErrors | null = this.control.errors;

    if (errors) {
      if (errors['required']) error = 'Required'
      else if (errors['email']) error = 'Invalid email'
    }

    return error
  }

  touch() {
    this.control.markAsTouched();
  }
}
