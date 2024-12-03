import mongoose from "mongoose";


export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "MERN_STACK_HOSPITAL_MANANGEMENT_SYSTEM"
    }).then(() => {
        console.log("Connected to Database");
    }).catch(err => {
        console.error(`Some error occured while connecting to database: ${err}`);
    })
}



