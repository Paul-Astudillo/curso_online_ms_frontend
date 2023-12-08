import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from 'src/domain/micro_s3/estudiante';
import { Curso } from 'src/domain/micro_s3/curso';

const urlbase = "http://localhost:8083/micro3/inscripciones/"

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  constructor(private http: HttpClient) { }
  
  ///             micros1         micros2
  save(estudiante: Estudiante, cursos: Curso[]){
    console.log("Servicio POST MS3")
    console.log("estudiante: "+estudiante.cedula)
    console.log("curso: "+cursos)

    estudiante.cursos = cursos

    console.log(estudiante)

    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.post<any>(urlbase+"guardar", JSON.stringify(estudiante), {headers})
  }

  getAll(): Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(urlbase+"all")
  }

}
