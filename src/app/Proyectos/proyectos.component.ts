import { Component, OnInit } from '@angular/core';
import { Proyecto } from './proyecto';
import { ProyectoService } from './proyecto.service';

import { Router }   from '@angular/router';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})


export class ProyectosComponent implements OnInit {
   proyectos: Proyecto[];
   mensajeError: string; 
  constructor(private proyectoService: ProyectoService, private router: Router) { }

    getProyectos() {
       this.proyectoService.getProyectos2().then(proyectos => this.proyectos = proyectos,
       error => this.mensajeError = <any>error);
    }

    ngOnInit(): void {
    this.getProyectos();
  }
  
  /**gotoDetail(): void {
    this.router.navigate(['/detail', id]);
  }
  */

  crearProyecto(): void {
    this.router.navigate([`/formproyecto`]);
  }
  
  
}
