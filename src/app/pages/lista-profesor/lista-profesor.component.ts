import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ProfesorService } from 'src/app/services/profesor.service';
import { Profesor } from 'src/domain/profesor';

@Component({
  selector: 'app-lista-profesor',
  templateUrl: './lista-profesor.component.html',
  styleUrls: ['./lista-profesor.component.css']
})
export class ListaProfesorComponent {

  listadoProfesores: Profesor[] = [] 
  profesorSelecionada: Profesor| null = null;
  
  constructor(profesorService:ProfesorService,private router: Router ) {
    this.listadoProfesores = profesorService.getlist()
  }


  editar(profesor: Profesor){


    let params: NavigationExtras = {
      queryParams: {
        usuario: profesor,
        nombre: 'profesor'
      }
    }
    this.router.navigate(["pagina/formulario"], params)

  
  }


  eliminar(profesor: Profesor) {
    for(let i = 0 ; i < this.listadoProfesores.length ; i++){
      if(this.listadoProfesores[i] === profesor){
        console.log("son iguales");
        this.listadoProfesores.splice(i,1);
      }
    }
  }
}
