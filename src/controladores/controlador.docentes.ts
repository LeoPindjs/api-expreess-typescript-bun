import type { Request, Response } from "express";

import {
  agregarData,
  eliminarDataPorId,
  modificarData,
  obtenerDataPorId,
  obtenerTodaLaData,
} from "../servicios/servicio.docentes";
import type { Docente } from "../interfaces/interface.docente";

const obtenerDocentes = (_req: Request, res: Response): Response<Docente[]> => {
  return res.status(200).json(obtenerTodaLaData());
};

const obtenerDocente = (
  req: Request,
  res: Response
): Response<Docente | string> => {
  let docente = obtenerDataPorId(req.params.id);
  return docente
    ? res.status(200).json(docente)
    : res.status(404).send("Docente no encontrado 😒");
};

const agregarDocente = (req: Request, res: Response): Response<string> => {
  let docente = agregarData(req.body);
  return docente
    ? res.status(200).send(`👉 Docente agregado con éxito id : ${docente.id}`)
    : res.status(404).send("Docente no encontrado 😒");
};

const eliminarDocente = (
  req: Request,
  res: Response
): Response<string | number> => {
  let docente = eliminarDataPorId(req.params.id);
  console.log(docente);
  return docente
    ? res
        .status(200)
        .send(`✅El usuario con id ${docente.id} fué eliminado con éxito 👌`)
    : res.sendStatus(404);
};

const modificarDocente = (
  req: Request,
  res: Response
): Response<string | number> => {
  let docente = modificarData(req.params.id, req.body);
  return docente
    ? res
        .status(200)
        .send(`✅El usuario con id ${docente.id} fué modificado con éxito 👌`)
    : res.sendStatus(404);
};

export {
  obtenerDocentes,
  obtenerDocente,
  agregarDocente,
  eliminarDocente,
  modificarDocente,
};
