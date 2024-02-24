import type { Express } from "express";
import { json, text, urlencoded } from "express";
import morgan from "morgan";

const middlewares = (app: Express): void => {
  app.use(json());
  app.use(text());
  app.use(urlencoded({ extended: false }));
  app.use(morgan("dev"));
};

export { middlewares };
