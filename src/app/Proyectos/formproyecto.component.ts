import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proyecto } from './proyecto';
import { ProyectoService } from './proyecto.service';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'formproyecto',
  templateUrl: './formproyecto.component.html',
  styleUrls: ['./formproyecto.component.css']
})
export class FormproyectoComponent implements OnInit {

   constructor(
    private proyectoService: ProyectoService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) { }

  proyecto: Proyecto = new Proyecto();
  mensajeError: string;
  submitted = false;
  active = true;
  idnproyecto: number;

  ngOnInit(): void {

  }
  
  onSubmit() {
    this.submitted = true;
    this.proyecto.adtfecha = "2017-06-15";
    this.proyecto.adtusuario = "Admin";
    this.proyecto.estados = 1;
    this.proyectoService.createdit(this.proyecto).subscribe(proyecto => (console.log(proyecto),
      this.proyecto = proyecto,
      error => this.mensajeError = <any>error));;
    this.goBack();
  }

  newForm() {
    this.proyecto = new Proyecto();
    this.active = false;
    setTimeout(() => { this.active = true; });
  }

 goBack(): void {
    this.router.navigate(['/proyectos']);
  }


}
