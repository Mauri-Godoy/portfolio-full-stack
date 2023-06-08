import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { InputComponent } from './input/input.component';
import { BackgroundElementComponent } from './background-element/background-element.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BarItemComponent } from './bar-item/bar-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    InputComponent,
    BarItemComponent,
    BackgroundElementComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    FormsModule,
    RouterModule,
  ],
  exports: [InputComponent, BarItemComponent, BackgroundElementComponent]
})
export class SharedModule { }
