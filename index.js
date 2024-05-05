//importacion de librerias
import express from "express";
import dotenv from "dotenv";
import connectDB from "./utiles/db.js";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
dotenv.config();
connectDB();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


const port = process.env.PORT;


//definicion de endpoints

app.get("/", (req, res) => {
    res.send("Hello World");
});

import { getProyectos } from "./modelo/proyectosController.js";

app.get("/proyectos", getProyectos);

app.listen(port, () => {
    console.log(`App corriendo en puerto ${port}`)
});
