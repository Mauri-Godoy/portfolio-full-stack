import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PresentationRoutingModule } from './presentation-routing.module';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [PresentationComponent, HomeComponent, ContactComponent, ProjectsComponent],
  imports: [
    CommonModule,
    PresentationRoutingModule,
    FontAwesomeModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class PresentationModule { }
