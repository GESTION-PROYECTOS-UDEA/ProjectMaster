import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Proyecto } from './proyecto'

import 'rxjs/add/operator/toPromise';


@Injectable()
export class ProyectoService {
  private proyectosUrl = 'http://localhost:8080/proyecto';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {
  }

  getProyectos(): Observable<Proyecto[]> {
    return this.http
      .get(`${this.proyectosUrl}/findall`, { headers: this.headers })
      .map((res: Response) => <Proyecto[]>res.json())
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getProyecto(id: number): Observable<Proyecto> {
    const url = `${this.proyectosUrl}/find/${id}`;
    return this.http.get(url).
      map(res => res.json())
        .catch(this.handleError);
  }

  createdit(proyecto: Proyecto): Observable<Proyecto> {
    let body = JSON.stringify(proyecto);
    let headers = this.headers;
    let options = new RequestOptions({ headers: headers });
    if (proyecto.idnproyectos) {
      return this.http
      .put(`${this.proyectosUrl}/edit/${proyecto.idnproyectos}`, body, options)
      .map(res => (<Proyecto>res.json().data))
        .catch(this.handleError);
    } else {
      return this.http
        .post(`${this.proyectosUrl}/save`, body, options)
        .map(res => (<Proyecto>res.json().data))
        .catch(this.handleError);
    }

  }
}