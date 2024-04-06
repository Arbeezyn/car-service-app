import express from "express";
import mongoose from "mongoose";
import {
  create,
  getOne,
  getAll,
  remove,
  transfer,
} from "./controllers/Request";

import {
  getOneArchive,
  getAllArchive,
  removeArchive,
} from "./controllers/Archive";

import { login } from "./controllers/Login";

import cors from "cors";

const app = express();
const port = 4444;

app.use(cors());

mongoose
  .connect(
    "mongodb+srv://admin:wwwwww@cluster0.gvhafjn.mongodb.net/car-service-app"
  )
  .then(() => {
    console.log("Подключен к MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

// Запросы

app.post("/request", create);

app.get("/request/:id", getOne);

app.get("/request", getAll);

app.delete("/request/:id", remove);

app.post("/request/transfer/:id", transfer);

app.post("/login", login);

app.get("/archive/:id", getOneArchive);

app.get("/archive", getAllArchive);

app.delete("/archive/:id", removeArchive);

//Конец запросов

app.listen(port, () => {
  console.log(`Приложение работает на порте: ${port}`);
});

export default app;
