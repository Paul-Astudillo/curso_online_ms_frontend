import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/domain/micro_s2/curso';

const urlbase = "http://localhost:8082/micro2/curso/"

@Injectable({
  providedIn: 'root'
})




export class CursoService {


  constructor(private http: HttpClient){}

 

  save(curso:Curso){

    console.log("Servicio POST")
    console.log("curso: "+curso.id)

    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.post<any>(urlbase+"guardar", JSON.stringify(curso), {headers})
    
  }
  getAll(): Observable<Curso[]>{
     return this.http.get<Curso[]>(urlbase+"all")
  }
  
}
