import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';
import { ProfesorService } from 'src/app/services/profesor.service';
import { Curso } from 'src/domain/micro_s2/curso';
import { Profesor } from 'src/domain/profesor';

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css']
})
export class ListaCursoComponent {

  listadoCurso: Curso[] = [] 
  //estudianteSelecionada: Estudiante| null = null;
  
  constructor(private cursoService:CursoService,private router: Router ) {
    this.cursoService.getAll().subscribe(
      (data: Curso[]) => {
        this.listadoCurso = data
      }
    )
  }

}
