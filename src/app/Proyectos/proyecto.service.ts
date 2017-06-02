import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Proyecto } from './proyecto'

import 'rxjs/add/operator/toPromise';


@Injectable()
export class ProyectoService {
    private proyectosUrl = 'http://localhost:8080/proyecto';
    private headers = new Headers({ 'Content-Type': 'application/json' });

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

  getProyectos3(): Observable<Proyecto[]>{
      return this.http
      .get(`${this.proyectosUrl}/findall`, {headers: this.headers})
      .map((res: Response) => <Proyecto[]>res.json())
      .catch(this.handleError);
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

    /**create(proyecto: Proyecto): Promise<Proyecto> {
      return this.http
      .post(`${this.proyectosUrl}/save`, JSON.stringify({proyecto}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
    }
    */

    create(proyecto: Proyecto): Observable<Proyecto> {
      let body = JSON.stringify(proyecto);
      let headers = this.headers;
      let options = new RequestOptions({ headers: headers });
      console.log('Creeando el proyecto'+ body );
        return this.http
        .post(`${this.proyectosUrl}/save`, body, options)
        .map(res => (<Proyecto>res.json().data))
        .catch(this.handleError);
    }



}

const PROYECTOS: Proyecto[]=[
  {"idnproyectos":7,
  "nombreproyecto":"Pruebas2",
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
