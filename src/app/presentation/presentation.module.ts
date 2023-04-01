import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationRoutingModule } from './presentation-routing.module';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    PresentationComponent,
    HomeComponent],
  imports: [
    CommonModule,
    PresentationRoutingModule]
})
export class PresentationModule { }
