import { Curso } from "./curso";

export class Estudiante {
    nombre: string = '';
    apellido: string = '';
    cedula: string = '';
    correoElectronico: string = '';
    telefono: string = '';
    cursos: Curso[] = []; // Agrega una lista de cursos
}
