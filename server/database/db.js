import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URI = `mongodb://itsmeayushdahiya008:123@ac-lned8vm-shard-00-00.uxp33px.mongodb.net:27017,ac-lned8vm-shard-00-01.uxp33px.mongodb.net:27017,ac-lned8vm-shard-00-02.uxp33px.mongodb.net:27017/?ssl=true&replicaSet=atlas-667shi-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;

    // const MONGODB_URI = `mongodb+srv://itsmeayushdahiya008:<123>@cluster0.uxp33px.mongodb.net/`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;