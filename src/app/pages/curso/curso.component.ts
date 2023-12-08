import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';
import { ProfesorService } from 'src/app/services/profesor.service';
import { Curso } from '../../domain/micro_s2/curso';
import { Profesor } from '../../domain/micro_s2/profesor';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent {

  curso:Curso=new Curso();
  listadoProfesores: Profesor[] = [];
  profesorSeleccionado: Profesor | null = null;

  constructor(private cursoService: CursoService,private profesorService:ProfesorService,
    private router: Router) {
  
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.curso= new Curso()
        this.curso = params['contacto']
      }
      this.profesorService.getAll().subscribe(
        (data: Profesor[]) => {
          this.listadoProfesores = data
        }
      )

      
    }
  
  
    guardar(){
     
      this.curso.profesor = this.profesorSeleccionado
      console.log(this.curso)
      this.cursoService.save(this.curso).subscribe((data)=>{
        console.log("resultado POST: ", data)
        this.router.navigate(["paginas/listadoCursos"]);
      })
      this.curso= new Curso();
      //this.seleccionarProfesor
      
  
    }

    


}
