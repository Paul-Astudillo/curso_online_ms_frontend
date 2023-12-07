import { Injectable } from '@angular/core';
import { Profesor } from 'src/domain/micro_s2/profesor';


const urlbase = "http://localhost:8080/micro1/estudiante/"

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
