import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router }   from '@angular/router';
import { Proyecto } from './proyecto';
import { ProyectoService } from './proyecto.service';


@Component({
  selector: 'formproyecto',
  templateUrl: './formproyecto.component.html',
  styleUrls: ['./formproyecto.component.css']
})
export class FormproyectoComponent {

  constructor(private proyectoService: ProyectoService, private router: Router) { }

  submitted = false;
  onSubmit() { this.submitted = true; }

   /**save(proyecto: Proyecto): void{
    this.proyectoService.create();
  }*/
}
