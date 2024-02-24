import type { Express, Request, Response } from "express";
import { static as s } from "express";
import path from "path";

import { middlewares } from "./middlewares/index.ts";
import { routes } from "./rutas/index.ts";
import { setters } from "./setters/index.ts";

const main = (app: Express): void => {
  // Configuraciones
  setters(app);

  // Middlewares
  middlewares(app);

  // Rutas
  routes(app);

  // Static files
  app.use("/public", s(path.join(__dirname, "./public")));

  // Ruta no encontrada
  app.use((_req: Request, res: Response) =>
    res.status(404).send("Ruta no encontrada 😒")
  );
};

export { main };
