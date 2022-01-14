const User = require('../models/user.models');
const bcrypt = require("bcryptjs");
const {secretKey} = require('../config/jwt.config');
const jwt = require('jsonwebtoken');

const findUsers = (req,res) =>{
  User.find({}).sort('userName')
      .then(results => res.json({data:results}))
      .catch(error=>{
        res.json({error:error, message:'Users not found'})
        res.sendStatus(404)
      })
};

/*


const findSingleUser = (req,res) =>{
  User.findOne({_id:req.params.id})
      .then(results => res.json({data:results}))
      .catch(error=>{
        res.json({error:error, message:'User not found'})
        res.sendStatus(404)
      })
};

const updateUser =(req,res) =>{
  User.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
      .then(results => res.json({data:results}))
      .catch(error=>{
        res.json({error:error, message:'Could not update a user'})
        res.sendStatus(500);
      })
}; */


const deleteUser =(req,res) =>{
  User.deleteOne({_id:req.params.id})
  .then(results => res.json({data:results}))
    .catch(error=>{
      res.json({error:error, message:'Could not delete a user'})
      res.sendStatus(202);//aceptado
    })
}

const registerUser = (req,res) =>{ //Register
  //entendemos que el email es como un id, es único para cada usuario no puede repetirse para diferentes usuarios
  User.findOne({email: req.body.email})
    .then(result => {
      if(result){ //si ya existe el email
        res.json({error:true, message:'The email is registered'});
      } else { //sino existe se crea una nueva cuenta con un nuevo email
        User.create(req.body)
          .then(newAccount => res.json({data:newAccount}))
          .catch(error => {
            res.json({error:error, message:"Could not registered a user"});
            res.sendStatus(500);
          })
      }
    })
};

//loginUser
//1. Verificamos que el email a escribir se encuentra almacenado en la BD
//2. Comparamos la contraseña que ingresamos con la contraseña almacenada en la BD
//3. Aqui creamos nuestra cookie => usertoken
const loginUser = (req, res) => {
  //1.
  //const {email} = req.body;
  //console.log({emailInput: req.body.email, emailOficial: email});
  User.findOne({email: req.body.email})
    .then(result => {
      /* if(result === null){
        res.json({error: true, message: "User not exists"})
      } else */ 
      //2.
      //const {email} = req.body;
      //console.log({emailInput: req.body.email, emailOficial: email});
      if(result) {
        //esta promesa de abajo devuelve algo un resultado si son iguales amabas contraseñas sino un error que son diferentes
        bcrypt.compare(req.body.password, result.password)
          .then(isCorrect => {
            //si es correcto ambos passwords creamos nuestro payload que no es mas que la data del user.models.js
            if(isCorrect){
              const payload = {
                  _id: result._id,
                  userName: result.userName,
                  email: result.email
              }
              //Generamos un token de usuario con la (data, y la clave super secreta)
              const token = jwt.sign(payload, secretKey);
              //abajo establecemos el valor del nombre de la cookie
              //res.cookie("nombre de la cookie", valor asignado al nombre de la cookie, clave super secreta, opciones(propiedades como, codificar, expirar, dominio))
              //httpOnly => mitiga el riesgo cuando se accede a una cookie protegida
              //3. 
              res.cookie("usertoken", token, secretKey, {httpOnly: true})
                .json({message:"log-in correctly", data: payload})
            } else {
              res.json({error: true, message: "Invalidate password"})
            }
          })
          //en caso de las contraseñas no ser iguales
          .catch(err => res.json({
              error: err, message:"Invalidate password"
          }))
      } else {
        res.json({error: true, message: "User not exist"})
      } 
    })
    .catch(error => {//1.
    res.json({error:error, message:"User invalidate"});
    })
}

const logoutUser = (req, res) => {
  //elimino la cookie usertoken con .clearCookie .status => aceptado no es un error en y el mensaje logout correctamente
  res.clearCookie("usertoken").status(200).json({message: "Logout Correctly"})
}

module.exports = {findUsers, deleteUser, registerUser, loginUser, logoutUser};