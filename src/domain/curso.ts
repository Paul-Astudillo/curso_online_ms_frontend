import { Cliente } from "./cliente";
import { Profesor } from "./profesor";

export class Curso {
    nombre: string = '';
    descripcion: string = '';
    duracion: number = 0;
    profesor: Profesor | null = null; // Asigna un profesor al curso
    estudiantes: Cliente[] = []; // Lista de estudiantes en el curso
  
  }
  