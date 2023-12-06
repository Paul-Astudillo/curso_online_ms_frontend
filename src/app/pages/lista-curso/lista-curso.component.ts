import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/domain/curso';

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css']
})
export class ListaCursoComponent {
  listadoCursos: Curso[] = [] 
  cursoteSelecionada: Curso| null = null;
  
  constructor(cursoService:CursoService,private router: Router ) {
    this.listadoCursos = cursoService.getlist()
  }



  editar(curso: Curso){


    let params: NavigationExtras = {
      queryParams: {
        usuario: curso,
        nombre: 'curso'
      }
    }
    this.router.navigate(["pagina/formulario"], params)

  
  }


  eliminar(curso: Curso) {
    for(let i = 0 ; i < this.listadoCursos.length ; i++){
      if(this.listadoCursos[i] === curso){
        console.log("son iguales");
        this.listadoCursos.splice(i,1);
      }
    }
  }


}
