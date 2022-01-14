const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

  user:{
    //type: mongoose.Schema.Types.ObjectId,
    type: String,
    required:true,
    //ref: 'User'
  },

  title:{
    type: String,
    required:[true,'A title is required!']
  },

  date:{
    type: String
  },

  description:{
    type: String
  }

},{timestamps:true}); //--> Hora en la que se crea y actualiza algo en la DB

const Task = mongoose.model('Task', taskSchema);

module.exports = {Task, taskSchema};