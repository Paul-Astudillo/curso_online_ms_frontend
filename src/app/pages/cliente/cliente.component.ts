import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/domain/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {


  cliente:Cliente=new Cliente();
  

  constructor(private clienteService: ClienteService,
    private router: Router) {
  
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.cliente= new Cliente()
        this.cliente = params['contacto']
      }
    }
  
  
    guardar(){
      console.log(this.cliente)
      this.clienteService.save(this.cliente)
      this.cliente= new Cliente()
  
     this.router.navigate(["paginas/listacarreras"]);
  
  
    }
    cedulaInvalida = false; 

    validarCedula() {
      const cedulaPattern = /[0-9]{10}/;
      this.cedulaInvalida = !cedulaPattern.test(this.cliente.cedula);
    }




}
