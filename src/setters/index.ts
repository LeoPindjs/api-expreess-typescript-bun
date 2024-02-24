import type { Express } from "express";

const setters = (app: Express): void => {
  app.set("PORT", process.env.PORT || "");
};

export { setters };
