import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ProfesorService } from 'src/app/services/profesor.service';
import { Profesor } from 'src/domain/micro_s2/profesor';

@Component({
  selector: 'app-lista-profesor',
  templateUrl: './lista-profesor.component.html',
  styleUrls: ['./lista-profesor.component.css']
})
export class ListaProfesorComponent {

  listadoProfesores: Profesor[] = [] 
  //estudianteSelecionada: Estudiante| null = null;
  
  constructor(private profesorService:ProfesorService,private router: Router ) {
    this.profesorService.getAll().subscribe(
      (data: Profesor[]) => {
        this.listadoProfesores = data
      }
    )
  }
}
