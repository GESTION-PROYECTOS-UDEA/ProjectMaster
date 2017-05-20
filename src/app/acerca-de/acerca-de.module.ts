import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcercaDeRoutingModule } from './acerca-de-routing.module';
import { AcercaDeComponent } from './acerca-de.component';

@NgModule({
  imports: [
    CommonModule,
    AcercaDeRoutingModule
  ],
  declarations: [AcercaDeComponent]
})
export class AcercaDeModule { }
