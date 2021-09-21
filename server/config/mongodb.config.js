const mongoose = require('mongoose');
require('dotenv').config();

const dataBase = 'mongodb://localhost/task-manager';

const connectDB = async() =>{
  try{
    await mongoose.connect(dataBase,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`2: Established connection whit DB`);

  }catch(err){
    console.error(err);
  }
};

module.exports = connectDB;
