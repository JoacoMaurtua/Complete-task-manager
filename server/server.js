require('dotenv').config();

const express = require('express');

const app = express();

const PORT = process.env.PORT;

//Conexion con la base de datos
const mongodb = require('./config/mongodb.config');
mongodb();  

//MIDLEWARES PARA SOLICITUDES POST
app.use(express.json());
app.use(express.urlencoded({extended:true}))






app.listen(PORT,()=>{
  console.log(`1: Sever is runnig on port ${PORT}`);
})