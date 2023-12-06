import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfesorService } from 'src/app/services/profesor.service';
import { Profesor } from 'src/domain/profesor';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent {


  profesor:Profesor=new Profesor();
  

  constructor(private profesorService: ProfesorService,
    private router: Router) {
  
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.profesor= new Profesor()
        this.profesor = params['contacto']
      }
    }
  
  
    guardar(){
      console.log(this.profesor)
      this.profesorService.save(this.profesor)
      this.profesor= new Profesor()
  
     this.router.navigate(["paginas/listadoProfesores"]);
  
  
    }

    cedulaInvalida = false; 

    validarCedula() {
      const cedulaPattern = /[0-9]{10}/;
      this.cedulaInvalida = !cedulaPattern.test(this.profesor.cedula);
    }

}
