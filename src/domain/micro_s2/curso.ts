import { Estudiante } from "../micro_s1/estudiante";
import { Profesor } from "./profesor";

export class Curso {
    nombre: string = '';
    descripcion: string = '';
    duracion: number = 0;
    profesor: Profesor | null = null; // Asigna un profesor al curso
  }
  