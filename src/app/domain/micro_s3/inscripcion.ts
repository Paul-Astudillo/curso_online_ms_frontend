import { Curso } from "../micro_s2/curso";

export class Inscripcion {
    id: number =0 ;
    nombre: string='';
    apellido: string='';
    cedula: string='';
    cursos: Curso[] = [];
    fechaInscripcion: Date | null = null;
}
