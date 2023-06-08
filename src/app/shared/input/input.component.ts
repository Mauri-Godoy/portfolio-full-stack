import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent {

  @Input() placeholder: string = ""
  @Input() type: 'text' | 'email' | 'submit' = 'text';
  @Input() control: AbstractControl = new FormControl();


  value: string = this.control.value

  patchValue() {
    this.control.markAsDirty()
    this.control?.patchValue(this.value)
  }

  get isInvalid(): boolean {
    console.log(this.error)
    return this.control.invalid && this.control.dirty
  }

  get error() {
    return this.control.errors && this.control.errors['required'] ? "Campo requerido" : "Email inválido"
  }
}
