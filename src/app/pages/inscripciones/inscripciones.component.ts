import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';
import { InscripcionesService } from 'src/app/services/inscripciones.service';
import { Curso } from '../../domain/micro_s2/curso';
import { Inscripcion } from 'src/app/domain/micro_s3/inscripcion';


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
  
  inscripcion = new Inscripcion()

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

      this.inscripcion.cedula=this.resultadoBusqueda.cedula
      this.inscripcion.nombre= this.resultadoBusqueda.nombre
      this.inscripcion.apellido= this.resultadoBusqueda.apellido
      this.inscripcion.cursos =''
      for (const curso of this.cursosSeleccionados){
          this.inscripcion.cursos = this.inscripcion.cursos + curso.nombre+" : "+curso.profesor?.nombre+" "+curso.profesor?.apellido+" | \n"
      }

      this.inscripcion.fechaInscripcion = new Date()



      console.log("cursos seleccionados ")
      console.log(this.cursosSeleccionados)

      this.inscripcionesService.save(this.inscripcion).subscribe((data)=>{
        console.log("resultado POST: ", data)
        this.router.navigate(["paginas/listadoInscripciones"]);
      })

  }




}
