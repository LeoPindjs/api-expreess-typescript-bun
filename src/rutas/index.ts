import type { Express } from "express";
import { rutasDocentes } from "./rutas.docentes";

const routes = (app: Express) => {
  app.use(rutasDocentes);
};

export { routes };
