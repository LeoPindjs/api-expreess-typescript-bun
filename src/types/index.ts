import type { Docente } from "../interfaces/interface.docente";

export type DocenteSinId = Omit<Docente, "id">;
