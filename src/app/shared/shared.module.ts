import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { BackgroundElementComponent } from './components/background-element/background-element.component';
import { FormsModule } from '@angular/forms';
import { BarItemComponent } from './components/bar-item/bar-item.component';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';
import { BtnComponent } from './components/btn/btn.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TooltipComponent } from './components/tooltip/tooltip.component';

@NgModule({
  declarations: [
    InputComponent,
    BarItemComponent,
    BackgroundElementComponent,
    ProjectComponent,
    BtnComponent,
    TooltipComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
  ],
  exports: [InputComponent, BarItemComponent, BackgroundElementComponent, BtnComponent, ProjectComponent, TooltipComponent]
})
export class SharedModule { }
