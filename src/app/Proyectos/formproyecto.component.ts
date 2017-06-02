import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyecto } from './proyecto';
import { ProyectoService } from './proyecto.service';


@Component({
  selector: 'formproyecto',
  templateUrl: './formproyecto.component.html',
  styleUrls: ['./formproyecto.component.css']
})
export class FormproyectoComponent {

  constructor(private proyectoService: ProyectoService, private router: Router) { 
    
  }
  proyecto: Proyecto = new Proyecto;

  mensajeError: string;
  submitted = false;
  active = true;

  onSubmit() {

    this.submitted = true;
    this.proyectoService.create(this.proyecto).subscribe(proyecto => (console.log(proyecto),
      this.proyecto = proyecto,
      error => this.mensajeError = <any>error));;
    this.newForm();
  }

  newForm() {
    this.proyecto = new Proyecto();
    this.active = false;
    setTimeout(() => { this.active = true; });
  }
}
