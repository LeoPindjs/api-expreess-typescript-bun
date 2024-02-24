import type { DocenteSinId } from "../types";
import { Jornada } from "./../enums/index";

const tipoString = (param: string): string => {
  if (typeof param !== "string")
    throw new Error("El parámetro no es un string");
  return param;
};

const tipoJornada = (param: Jornada): Jornada => {
  if (Object.values(Jornada).includes(param)) return param;
  throw new Error("La jornada no es válida");
};

const validarDocente = ({
  nombre,
  materia,
  jornada,
}: DocenteSinId): DocenteSinId => {
  return {
    nombre: tipoString(nombre),
    materia: tipoString(materia),
    jornada: tipoJornada(jornada),
  };
};

export { validarDocente };
