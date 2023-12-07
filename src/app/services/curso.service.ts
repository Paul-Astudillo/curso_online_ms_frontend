import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from 'src/domain/micro_s2/curso';

const urlbase = "http://localhost:8080/micro1/estudiante/"

@Injectable({
  providedIn: 'root'
})




export class CursoService {


  constructor(private http: HttpClient){}

  Curso :Curso[]=[]

  save(contacto:Curso){

    this.Curso .push(contacto)
    console.log(this.Curso );
    
  }
  getlist(){
return this.Curso 

  }
}
