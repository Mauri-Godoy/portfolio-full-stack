import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PresentationRoutingModule } from './presentation-routing.module';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    PresentationComponent,
    HomeComponent],
  imports: [
    CommonModule,
    PresentationRoutingModule,
    FontAwesomeModule,
    NgOptimizedImage
  ]
})
export class PresentationModule { }
