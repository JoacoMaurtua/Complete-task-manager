const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
//const {taskSchema} = require('./task.models');

const UserSchema = new mongoose.Schema({
  userName:{
    type: String,
    required:[true, 'A user name is required!'],
    minlength:[3, 'The name must be great than 3 characters']
  },

  email:{
    type: String,
    required:[true,'A email is required!'],
    validate:{
      validator:val => /^([\w-.]+@([\w-]+.)+[\w-]+)?$/.test(val), //formato correcto del correo --> https://regexr.com/95714
      message:'Please type a correct format for the email!'
    },
    unique:true
  },

  password:{
    type: String,
    required:[true,'A password is required!'],
    minlength:[8,'The password must be great than 8 characters']

  }
  //,tasks: [taskSchema]

},{timestamps:true});

/* UserSchema.virtual("tasks", {
  ref: "Task",
  localField: "_id",
  foreignField: "user"
}) */

UserSchema.pre('save', function(next){
  //necesitamos el bcrypt para hashear las contraseñas por seguridad y luego almacenarlas en la base de datos mongoDB, su fueramos los devs de la aplicacion nos convertiriamos en hackers sino se hashea los passwords!!!
  //hasheamos la contraseña que se almacenará en la BD, 10 # de veces que se hashea (se encripta) por seguridad
  //es una promesa que nos devuelve un resultado
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash; //la contraseña que se almacenara en la BD sera la encriptada
      next(); //luego de hacerlo salta este next() es como una especie de brack de un switch case
    })
})

const User = mongoose.model('User',UserSchema);

module.exports = User;

