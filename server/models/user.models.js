const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName:{
    type: String,
    required:[true,'A user name is required!'],
    minlength:[5,'The password must be great than 5 characters']
  },

  email:{
    type: String,
    required:[true,'A email is required!'],
    validate:{
      validator:val => /^([\w-.]+@([\w-]+.)+[\w-]+)?$/.test(val), //formato correcto del correo --> https://regexr.com/95714
      message:'Please type a correct format for the email!'
    }
  },

  password:{
    type: String,
    required:[true,'A password is required!'],
    minlength:[8,'The password must be great than 8 characters']

  }
},{timestamps:true});

const User = mongoose.model('User',userSchema);

module.exports = User;

