import { Injectable } from '@angular/core';
import { Estudiante } from 'src/domain/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  Estudiante :Estudiante[]=[]

  save(contacto:Estudiante){

    this.Estudiante.push(contacto)
    console.log(this.Estudiante );
    
  }
  getlist(){
    return this.Estudiante 

  }
}
