import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from 'src/domain/estudiante';

@Component({
  selector: 'app-Estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent {


  estudiante:Estudiante=new Estudiante();
  

  constructor(private EstudianteService: EstudianteService,
    private router: Router) {
  
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.estudiante= new Estudiante()
        this.estudiante = params['contacto']
      }
    }
  
  
    guardar(){
      console.log(this.estudiante)
      this.EstudianteService.save(this.estudiante)
      this.estudiante= new Estudiante()
  
     this.router.navigate(["paginas/listadoEstudiantes"]);
  
  
    }
    cedulaInvalida = false; 

    validarCedula() {
      const cedulaPattern = /[0-9]{10}/;
      this.cedulaInvalida = !cedulaPattern.test(this.estudiante.cedula);
    }




}
