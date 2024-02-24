import type { Jornada } from "../enums";

export interface Docente {
  id: string;
  nombre: string;
  materia: string;
  jornada: Jornada;
}
