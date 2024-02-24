import express from "express";
import { main } from "./app";

const app = express();

main(app);

app.listen(app.get("PORT"));
console.log(`👉👉 SERVER CORRIENDO POR EL PUERTO 🚀🚀 ${app.get("PORT")}`);
