import { Injectable } from '@angular/core';
import { Profesor } from 'src/domain/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  Profesor :Profesor[]=[]

  save(contacto:Profesor){

    this.Profesor.push(contacto)
    console.log(this.Profesor );
    
  }
  getlist(){
return this.Profesor 

  }
}
