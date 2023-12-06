import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './pages/estudiante/estudiante.component';
import { CursoComponent } from './pages/curso/curso.component';
import { ProfesorComponent } from './pages/profesor/profesor.component';

const routes: Routes = [

  {path:"paginas/formularioestudiante", component:EstudianteComponent},
  {path:"paginas/formulariocurso", component:CursoComponent},
  {path:"paginas/formularioprofesor", component:ProfesorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
