import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from 'src/domain/micro_s1/estudiante';


const urlbase = "http://localhost:8080/micro1/estudiante/"

@Injectable({
  providedIn: 'root'
})



export class EstudianteService {

  constructor(private http: HttpClient){}

 

  save(estudiante:Estudiante){

    console.log("Servicio POST")
    console.log("estudiante: "+estudiante.cedula)

    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.post<any>(urlbase+"guardar", JSON.stringify(estudiante), {headers})
    
  }

  getAll(): Observable<Estudiante[]>{
     return this.http.get<Estudiante[]>(urlbase+"all")
  }


}
