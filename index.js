//importacion de librerias
import express from "express";
import dotenv from "dotenv";
import connectDB from "./scripts/db.js";
import bodyParser from "body-parser";
import cors from "cors";


const app = express();
app.use(express.json());
dotenv.config();
connectDB();
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


const port = process.env.PORT;


//definicion de endpoints

app.get("/", (req, res) => {
    res.send("Hello World");
});

// endpoint proyectos
import { getProyectos, getProyecto } from "./modelo/proyectosController.js";

app.get("/proyectos", getProyectos);
app.get("/proyecto/:id", getProyecto);



app.listen(port, () => {
    console.log(`App corriendo en puerto ${port}`)
});
