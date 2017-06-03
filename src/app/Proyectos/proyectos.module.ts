import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosComponent } from './proyectos.component';
import { ProyectoService }         from './proyecto.service';
import { ProyectoComponent } from './proyecto.component';
import { FormproyectoComponent } from './formproyecto.component';
import { FormsModule } from '@angular/forms';
import { EditProyectoComponent } from './edit-proyecto.component';

@NgModule({
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    HttpModule,
    FormsModule,
  ],
  declarations: [ProyectosComponent, ProyectoComponent, FormproyectoComponent, EditProyectoComponent],
  providers: [ProyectoService]
})
export class ProyectosModule { }
