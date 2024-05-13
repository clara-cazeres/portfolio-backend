import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

let Schema = mongoose.Schema;

let proyectoSchema = new Schema({
    titulo: { type: String },
    categoria: { type: String },
    institucion: { type: String },
    materia: { type: String },
    fecha: { type: Date },
    herramientas: [{ type: String }],
    equipo: [{ type: String }],
    about: { type: String },
    descripcion: { type: String },
    fondodescripcion: { type: String},
    portada: { type: String },
    logo: { type: String },
    colores: { type: String },
    tipografias: { type: String },
    imagenes: [{ type: String }],
    video: { type: String }
})

proyectoSchema.plugin(mongooseUniqueValidator);

let Proyectos = mongoose.model("Proyecto", proyectoSchema);

export default Proyectos; 