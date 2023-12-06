import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { CursoComponent } from './pages/curso/curso.component';
import { ProfesorComponent } from './pages/profesor/profesor.component';

const routes: Routes = [

  {path:"paginas/formulariocliente", component:ClienteComponent},
  {path:"paginas/formulariocurso", component:CursoComponent},
  {path:"paginas/formularioprofesor", component:ProfesorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
