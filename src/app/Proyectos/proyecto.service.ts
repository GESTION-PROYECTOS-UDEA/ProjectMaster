import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Proyecto } from './proyecto'

import 'rxjs/add/operator/toPromise';


@Injectable()
export class ProyectoService {
    private proyectosUrl = 'localhost:8080/proyecto';

    constructor(private http : Http){
    }

    getProyectos(): Promise<Proyecto[]> {
      return this.http.get(`${this.proyectosUrl}/findall`).toPromise()
      .then(response => response.json().data as Proyecto[])
      .catch(this.handleError);
    }

    getProyectos2(): Promise<Proyecto[]>{
      return Promise.resolve(PROYECTOS)
    }
    
    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

    getProyecto(id: number): Promise<Proyecto> {
      const url = `${this.proyectosUrl}/find/${id}`;
      return this.http.get(url).toPromise().
      then(response => response.json()
      .data as Proyecto).catch(this.handleError);
    }
    private headers = new Headers({'Content-Type': 'application/json'});

    create(proyecto: Proyecto): Promise<Proyecto> {
      return this.http
      .post(`${this.proyectosUrl}/save`, JSON.stringify({proyecto}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
    }


}

const PROYECTOS: Proyecto[]=[
  {"idn":7,
  "nombreproyecto":"Pruebas",
  "objetivogeneral":"Pruebas al crud",
  "fechainicial":"2017-04-20",
  "adtusuario":"admin",
  "adtfecha":"2017-04-20",
  "calificacion":"null",
  "justificacioncancelacion":"null",
  "justificacionsuspension":"null",
  "reconocimiento":"null",
  "estados":2,
  "modalidades":1,
  "tiposproyectos":3}
];
