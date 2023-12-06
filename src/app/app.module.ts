import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EstudianteComponent } from './pages/estudiante/estudiante.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './templete/menu/menu.component';
import { TituloComponent } from './templete/titulo/titulo.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProfesorComponent } from './pages/profesor/profesor.component';
import { CursoComponent } from './pages/curso/curso.component';
import { ListaEstudianteComponent } from './pages/lista-estudiante/lista-estudiante.component';
import { ListaProfesorComponent } from './pages/lista-profesor/lista-profesor.component';
import { ListaCursoComponent } from './pages/lista-curso/lista-curso.component';
import { InicioComponent } from './pages/inicio/inicio.component';



@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    MenuComponent,
    TituloComponent,
    ProfesorComponent,
    CursoComponent,
    ListaEstudianteComponent,
    ListaProfesorComponent,
    ListaCursoComponent,
    InicioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
