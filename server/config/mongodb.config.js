const mongoose = require('mongoose');

const dataBase = process.env.DB;

const connectDB = async() =>{
  try{
    await mongoose.connect(dataBase,{ //Incorporar los metodos de mongoose a la DB
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`2: Established connection with DB`);

  }catch(err){
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
