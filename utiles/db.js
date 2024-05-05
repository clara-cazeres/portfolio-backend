import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Base de datos conectada");
    } catch(error) {
        console.error("Error al conectarse a la base:", error);
        process.exit(1);
    }
};

export default connectDB;