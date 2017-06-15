import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proyecto } from './proyecto';
import { ProyectoService } from './proyecto.service';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  constructor(
    private proyectoService: ProyectoService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) { }

  proyecto: Proyecto = new Proyecto();
  mensajeError: string;
  idnproyecto: number;
  submitted = false;
  active = true;

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => (this.idnproyecto = +params['idnproyectos'], console.log(this.idnproyecto), 
      this.proyectoService.getProyecto(this.idnproyecto)))
      .subscribe(proyecto => (console.log(proyecto), this.proyecto = proyecto));
  }
  onSubmit() {
    this.submitted = true;
    this.proyectoService.createdit(this.proyecto).subscribe(proyecto => (console.log(proyecto),
      this.proyecto = proyecto,
      error => this.mensajeError = <any>error));;
    this.goBack();
  }

  newForm() {
    this.active = false;
    setTimeout(() => { this.active = true; });
  }

  goBack(): void {
    this.router.navigate(['/proyectos']);
  }

}