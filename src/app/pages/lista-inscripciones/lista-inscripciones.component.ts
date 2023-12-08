import { Component } from '@angular/core';
import { Inscripcion } from 'src/app/domain/micro_s3/inscripcion';
import { InscripcionesService } from 'src/app/services/inscripciones.service';

@Component({
  selector: 'app-lista-inscripciones',
  templateUrl: './lista-inscripciones.component.html',
  styleUrls: ['./lista-inscripciones.component.css']
})
export class ListaInscripcionesComponent {

  listadoInscripciones: Inscripcion[] = []
  
  constructor(private inscripcionService: InscripcionesService){
    this.inscripcionService.getAll().subscribe(
      (data: Inscripcion[])=>{
        this.listadoInscripciones =data
      }
    )
  }

  formatDateTime( fechaHoraString: any): string{
    const fechaHora = new Date(fechaHoraString);
  
    const fechaFormateada = `${fechaHora.getFullYear()}-${String(fechaHora.getMonth() + 1).padStart(2, '0')}-${String(fechaHora.getDate()).padStart(2, '0')}`;
  
    const horaFormateada = `${String(fechaHora.getHours()).padStart(2, '0')}:${String(fechaHora.getMinutes()).padStart(2, '0')}:${String(fechaHora.getSeconds()).padStart(2, '0')}`;
  
    return `${fechaFormateada} - ${horaFormateada}`
    }

}
