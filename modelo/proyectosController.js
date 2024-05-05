import Proyectos from "./Proyecto.js";

const getProyectos = async (req, res) => {
    try {
        const proyectos = await Proyectos.find({});
        console.log('Proyectos encontrados:', proyectos);
        res.json(proyectos);
    } catch (err){
        res.status(500).send("Internal server error");
    }
};

const getProyecto = async (req, res) => {
    try {
        const proyecto = await Proyectos.findById(req.params.id);
        res.json(proyecto);
    } catch (err) {
        res.status(500).send("Internal server error");
    }
};

export { getProyectos, getProyecto };