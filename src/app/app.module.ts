import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './templete/menu/menu.component';
import { TituloComponent } from './templete/titulo/titulo.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProfesorComponent } from './pages/profesor/profesor.component';
import { CursoComponent } from './pages/curso/curso.component';



@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    MenuComponent,
    TituloComponent,
    ProfesorComponent,
    CursoComponent,

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
