import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesor } from '../domain/micro_s2/profesor';


const urlbase = "http://localhost:8082/micro2/profesor/"

@Injectable({
  providedIn: 'root'
})



export class ProfesorService {

  constructor(private http: HttpClient){}

 

  save(profesor:Profesor){

    console.log("Servicio POST")
    console.log("profesor: "+profesor.cedula)

    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.post<any>(urlbase+"guardar", JSON.stringify(profesor), {headers})
    
  }
  getAll(): Observable<Profesor[]>{
     return this.http.get<Profesor[]>(urlbase+"all")
  }
  
}
