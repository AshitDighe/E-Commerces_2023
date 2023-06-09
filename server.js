import express from 'express';
import dotenv from "dotenv";
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authReute.js'
//const colors=require('colors')

//configure env

dotenv.config();

//Database config
connectDB();

//rest object
const app =express()

//midddle object
app.use(express.json())
app.use(morgan('dev'))
//routes 
app.use('/api/v1/auth',authRoutes);
//rest api
app.get('/',(req,res)=>{
    res.send
        ('<h1>Welcome to ecommerce app</h1>');
    });

//port
const PORT=process.env.PORT ||8080

//run
app.listen(PORT,()=>{
    console.log('serverRunning on',{PORT});
}); 