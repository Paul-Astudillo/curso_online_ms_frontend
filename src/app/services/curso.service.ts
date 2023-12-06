import { Injectable } from '@angular/core';
import { Curso } from 'src/domain/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  Curso :Curso[]=[]

  save(contacto:Curso){

    this.Curso .push(contacto)
    console.log(this.Curso );
    
  }
  getlist(){
return this.Curso 

  }
}
