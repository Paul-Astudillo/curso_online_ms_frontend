import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/domain/curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent {

  curso:Curso=new Curso();
  

  constructor(private cursoService: CursoService,
    private router: Router) {
  
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.curso= new Curso()
        this.curso = params['contacto']
      }
    }
  
  
    guardar(){
      console.log(this.curso)
      this.cursoService.save(this.curso)
      this.curso= new Curso()
  
     this.router.navigate(["paginas/listarcurso"]);
  
  
    }

}
