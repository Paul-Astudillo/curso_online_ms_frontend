import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from '../../domain/micro_s1/estudiante';

@Component({
  selector: 'app-Estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent {


  estudiante:Estudiante=new Estudiante();
  

  constructor(private estudianteService: EstudianteService,
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
      this.estudianteService.save(this.estudiante).subscribe((data)=>{
        console.log("resultado POST: ", data)
        this.router.navigate(["paginas/listadoEstudiantes"]);
      })
      this.estudiante= new Estudiante()
  
    
  
  
    }
    cedulaInvalida = false; 

    validarCedula() {
      const cedulaPattern = /[0-9]{10}/;
      this.cedulaInvalida = !cedulaPattern.test(this.estudiante.cedula);
    }




}
