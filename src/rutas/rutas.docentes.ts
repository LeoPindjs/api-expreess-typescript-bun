import { Router } from "express";

import {
  agregarDocente,
  eliminarDocente,
  modificarDocente,
  obtenerDocente,
  obtenerDocentes,
} from "../controladores/controlador.docentes.ts";

const rutasDocentes = Router();

// Rutas Docentes
rutasDocentes.get("/docentes", obtenerDocentes);
rutasDocentes.get("/docentes/:id", obtenerDocente);
rutasDocentes.post("/docentes", agregarDocente);
rutasDocentes.delete("/docentes/:id", eliminarDocente);
rutasDocentes.patch("/docentes/:id", modificarDocente);

export { rutasDocentes };
