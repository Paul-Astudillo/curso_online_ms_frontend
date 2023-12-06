import { Injectable } from '@angular/core';
import { Cliente } from 'src/domain/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  Cliente :Cliente[]=[]

  save(contacto:Cliente){

    this.Cliente .push(contacto)
    console.log(this.Cliente );
    
  }
  getlist(){
return this.Cliente 

  }
}
