import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';
import { InscripcionesService } from 'src/app/services/inscripciones.service';
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
  
  constructor(private cursoService:CursoService,private inscripcionesService: InscripcionesService,private router: Router , private http: HttpClient ) {
    this.cursoService.getAll().subscribe(
      (data: Curso[]) => {
        this.listadoCurso = data
      }
    )
  }

 // Función para buscar un estudiante
 buscarEstudiantePorCedula(cedula: string) {
  const url = `http://localhost:8081/micro1/estudiante/buscar?cedula=${cedula}`;

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
  
    console.log('Curso seleccionado:', curso.nombre);
    const index = this.cursosSeleccionados.indexOf(curso);
    if (index === -1) {
      // Agregar curso si no está en la lista
      this.cursosSeleccionados.push(curso);
    } else {
      // Quitar curso si ya está en la lista
      this.cursosSeleccionados.splice(index, 1);
    }
  }

  inscribir(){
      console.log("cursos seleccionados ")
      console.log(this.cursosSeleccionados)
      this.inscripcionesService.save(this.resultadoBusqueda, this.cursosSeleccionados).subscribe((data)=>{
        console.log("resultado POST: ", data)
        //this.router.navigate(["paginas/listadoInscripciones"]);
      })

  }




}
