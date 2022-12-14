import express from 'express';
import cors from 'cors';
// db import
import db from './db/db.js';
// routes import
import apiRouter from './routes/api.js';
//import cookieParser from "cookie-parser";
const app = express()
//app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use('/api',apiRouter);

try {
    await db.authenticate()
    console.log ('db is conected')
} catch (error) {
    console.log(`db not working the error es:  ${error}`)
}

app.get("/", (req,res)=>{
    res.send("ESTA CONECTADO")  
})

app.listen(8000,()=>{
    console.log ('server is runing')
})