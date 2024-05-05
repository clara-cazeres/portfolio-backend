import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

let Schema = mongoose.Schema;

let proyectoSchema = new Schema({
    titulo: { type: String },
    fecha: { type: Date },
    categoria: { type: String },
    herramientas: [{ type: String }],
    institucion: { type: String },
    materia: { type: String },
    sobre: { type: String },
    descripcion: { type: String },
    colores: [{ type: String }],
    tipografia: { type: String },
    imagenes: [{ type: String }],
    video: { type: String },
    portada: { type: String },
    id: { type: Number }
})

proyectoSchema.plugin(mongooseUniqueValidator);

let Proyectos = mongoose.model("Proyecto", proyectoSchema);

export default Proyectos; 