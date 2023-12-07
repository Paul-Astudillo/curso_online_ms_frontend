import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from 'src/domain/micro_s1/estudiante';

@Component({
  selector: 'app-lista-estudiante',
  templateUrl: './lista-estudiante.component.html',
  styleUrls: ['./lista-estudiante.component.css']
})
export class ListaEstudianteComponent {

  listadoEstudiantes: Estudiante[] = [] 
  //estudianteSelecionada: Estudiante| null = null;
  
  constructor(private estudianteService:EstudianteService,private router: Router ) {
    this.estudianteService.getAll().subscribe(
      (data: Estudiante[]) => {
        this.listadoEstudiantes = data
      }
    )
  }




  // editar(estudiante: Estudiante){


  //   let params: NavigationExtras = {
  //     queryParams: {
  //       usuario: estudiante,
  //       nombre: 'estudiante'
  //     }
  //   }
  //   this.router.navigate(["paginas/formularioestudiante"], params)

  
  // }


  eliminar(estudiante: Estudiante) {
    for(let i = 0 ; i < this.listadoEstudiantes.length ; i++){
      if(this.listadoEstudiantes[i] === estudiante){
        console.log("son iguales");
        this.listadoEstudiantes.splice(i,1);
      }
    }
  }

}
