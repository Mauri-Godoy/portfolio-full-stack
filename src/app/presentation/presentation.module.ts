import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationRoutingModule } from './presentation-routing.module';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { PresentationComponent } from './components/presentation/presentation.component';



@NgModule({
  declarations: [
    PresentationComponent
  ],
  imports: [
    CommonModule,
    PresentationRoutingModule,
    SharedModule
  ]
})
export class PresentationModule { }
