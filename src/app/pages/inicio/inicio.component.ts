import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private router: Router) {}

  ir() {
    // Llama a la función para cerrar la ventana
    this.cerrarVentana();

    // Redirige a la página deseada
    this.router.navigate(["paginas/listadoCursos"]);
  }

  cerrarVentana() {
    const portada = document.getElementById('portada');
    if (portada) {
      portada.classList.add('oculto');
    }
  }

}
