require('dotenv').config(); //SEFURIDAD PARA VARIABLES DE ENTORNO
const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

const PORT = process.env.PORT;

//Conexion con la base de datos
const mongodb = require('./config/mongodb.config');
mongodb();  

//MIDLEWARES PARA SOLICITUDES POST
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser())
app.use(cors({credentials: true, origin : 'http://localhost:3000'}));

//RUTA PARA TAREAS Y USUARIOS:
app.use('/api',require('./routes/task.routes'));
app.use('/api',require('./routes/user.routes'));




app.listen(PORT,()=>{
  console.log(`1: Sever is running on port ${PORT}`);
})