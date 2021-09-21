const express = require('express');

const app = express();

const PORT = process.env.PORT;


//MIDLEWARES PARA SOLICITUDES POST






app.listen(PORT,()=>{
  console.log(`1: Sever is runnig on port ${PORT}`);
})