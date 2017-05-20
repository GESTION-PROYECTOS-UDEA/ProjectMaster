import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectosComponent } from './proyectos.component';
import { ProyectoComponent } from './proyecto.component';
import { FormproyectoComponent } from './formproyecto.component';


const routes: Routes = [
  { path: '', component: ProyectosComponent },
  { path: 'proyecto', component: ProyectoComponent },
  { path: 'formproyecto', component: FormproyectoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProyectosRoutingModule { }
