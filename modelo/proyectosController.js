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


export { getProyectos };