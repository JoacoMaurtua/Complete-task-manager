require('dotenv').config(); //SEFURIDAD PARA VARIABLES DE ENTORNO

const express = require('express');

const app = express();

const PORT = process.env.PORT;

//Conexion con la base de datos
const mongodb = require('./config/mongodb.config');
mongodb();  

//MIDLEWARES PARA SOLICITUDES POST
app.use(express.json());
app.use(express.urlencoded({extended:true}))


//RUTA PARA TAREAS Y USUARIOS:
app.use('/api',require('./routes/task.routes'));
app.use('/api',require('./routes/user.routes'));




app.listen(PORT,()=>{
  console.log(`1: Sever is runnig on port ${PORT}`);
})