import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BarItemComponent } from './components/bar-item/bar-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackgroundElementComponent } from './components/background-element/background-element.component';
import { BackgroundComponent } from './components/background/background.component';
import { NgOptimizedImage } from '@angular/common';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectComponent } from './component/project/project.component';
import { ContactComponent } from './pages/contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    BarItemComponent,
    FooterComponent,
    BackgroundElementComponent,
    BackgroundComponent,
    ProjectsComponent,
    ProjectComponent,
    ContactComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
