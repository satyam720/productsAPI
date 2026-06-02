import express from 'express';
import { configDotenv } from 'dotenv';
import mongoose from 'mongoose';


// listen to port
configDotenv({path: './config.env', encoding: 'UTF-8', debug: true});

const DB = process.env.MONGO_SERVER.replace('<db_password>', process.env.MONGO_PASSWORD);
mongoose.connect(DB).then(() => {
    console.log("connected to DB");
});

const { default : app} = await import('./app.js');

const port = process.env.PORT || 3000;
console.log(process.env.PORT);

app.listen(port, () => {
    console.log(`listening on Port: ${port}`);
});
