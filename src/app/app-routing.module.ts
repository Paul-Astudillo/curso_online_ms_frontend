import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './pages/estudiante/estudiante.component';
import { CursoComponent } from './pages/curso/curso.component';
import { ProfesorComponent } from './pages/profesor/profesor.component';
import { ListaEstudianteComponent } from './pages/lista-estudiante/lista-estudiante.component';
import { ListaProfesorComponent } from './pages/lista-profesor/lista-profesor.component';
import { ListaCursoComponent } from './pages/lista-curso/lista-curso.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InscripcionesComponent } from './pages/inscripciones/inscripciones.component';

const routes: Routes = [

  {path:"paginas/formularioestudiante", component:EstudianteComponent},
  {path:"paginas/formulariocurso", component:CursoComponent},
  {path:"paginas/formularioprofesor", component:ProfesorComponent},
  {path:"paginas/listadoEstudiantes", component:ListaEstudianteComponent},
  {path:"paginas/listadoProfesores", component:ListaProfesorComponent},
  {path:"paginas/listadoCursos", component:ListaCursoComponent},
  {path:"paginas/Inicio", component:InicioComponent},
  {path:"paginas/inscripciones", component:InscripcionesComponent}

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
