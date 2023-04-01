import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BarItemComponent } from './components/bar-item/bar-item.component';



@NgModule({
  declarations: [
    BarItemComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
