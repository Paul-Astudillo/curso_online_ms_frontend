import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../domain/micro_s1/estudiante';
import { Curso } from '../domain/micro_s2/curso';
import { Inscripcion } from '../domain/micro_s3/inscripcion';


const urlbase = "http://localhost:8083/micro3/inscripciones/"

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {



  constructor(private http: HttpClient) { }
  
  
  save(inscripcion: Inscripcion){

    console.log("POST inscripcion")
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    return this.http.post<any>(urlbase+"guardar", JSON.stringify(inscripcion), { headers })
      
  }

  getAll(): Observable<Inscripcion[]>{
    return this.http.get<Inscripcion[]>(urlbase+"all")
  }

}
