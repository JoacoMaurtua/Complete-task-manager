const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title:{
    type: String,
    required:[true,'A title is required!']
  },

  date:{
    type: Date,
  },

  description:{
    type: String
  }

},{timestamps:true});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;