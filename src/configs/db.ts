import mongoose from "mongoose"

const dbUrl = 'mongodb+srv://swalahu:salahu37@crocs.2mrp72j.mongodb.net/e_commerce?retryWrites=true&w=majority';

export async function connectDb(){
    await mongoose.connect(dbUrl);
}
