import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/domain/micro_s2/curso';


@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent {


  listadoCurso: Curso[] = [] 
  cedula: string = ''; // Propiedad para almacenar la cédula
  resultadoBusqueda: any; // Propiedad para almacenar el resultado de la búsqueda
  cursosSeleccionados: Curso[] = [];
  
  constructor(private cursoService:CursoService,private router: Router , private http: HttpClient ) {
    this.cursoService.getAll().subscribe(
      (data: Curso[]) => {
        this.listadoCurso = data
      }
    )
  }

 // Función para buscar un estudiante
 buscarEstudiantePorCedula(cedula: string) {
  const url = `http://localhost:8080/micro1/estudiante/buscar?cedula=${cedula}`;

  // Realiza la solicitud GET
  this.http.get(url).subscribe(
    (response) => {
      this.resultadoBusqueda = response; // Actualiza el resultado de la búsqueda
      console.log('Respuesta de la búsqueda:', this.resultadoBusqueda);
    },
    (error) => {
      console.error('Error en la búsqueda:', error);
    }
  );
}




  seleccionarCurso(curso: any) {
    curso.seleccionado = curso.seleccionado; // Invierte el valor de seleccionado
    console.log('Curso seleccionado:', curso);
    curso.seleccionado = true; // Asumiendo que tienes una propiedad "seleccionado" en el objeto curso
  }

  guardar(){

  }



}
