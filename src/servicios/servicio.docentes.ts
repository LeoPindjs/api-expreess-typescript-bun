import { docentes } from "../servicios/fake.docentes.json";
import type { Docente } from "../interfaces/interface.docente.ts";
import type { DocenteSinId } from "../types/index.ts";

let misDocentes = docentes.map((docente) => ({
  id: crypto.randomUUID(),
  ...docente,
})) as Docente[];

const obtenerTodaLaData = (): Docente[] => {
  return misDocentes;
};

const obtenerDataPorId = (idParam: string): Docente | undefined => {
  return misDocentes.find(({ id }) => id === idParam);
};

const agregarData = (obj: DocenteSinId): Docente => {
  let docente = { id: crypto.randomUUID(), ...obj };
  misDocentes = [docente, ...misDocentes];
  return docente;
};

const eliminarDataPorId = (idParam: string): Docente | undefined => {
  let docente = obtenerDataPorId(idParam);
  misDocentes = misDocentes.filter(({ id }) => id !== idParam);
  return docente;
};

const modificarData = (idParam: string, obj: DocenteSinId): Docente => {
  const index = misDocentes.findIndex(({ id }) => id === idParam);
  let docente = misDocentes[index];
  misDocentes = misDocentes.with(index, { ...docente, ...obj });
  return docente;
};

export {
  agregarData,
  eliminarDataPorId,
  modificarData,
  obtenerDataPorId,
  obtenerTodaLaData,
};
