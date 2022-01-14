const User = require('../models/user.models');
const bcript = require("bcrypt");

/* const findUsers = (req,res) =>{
  User.find({}).sort('userName')
      .then(results => res.json({data:results}))
      .catch(error=>{
        res.json({error:error, message:'Users not found'})
        res.sendStatus(404)
      })
};


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
        res.json({error:error, message:'The email is registered'});
      } else { //sino existe se crea una nueva cuenta con un nuevo email
        User.create(req.body)
          .then(result => res.json({data:result}))
          .catch(error => {
            res.json({error:error, message:"Could not registered a user"});
            res.sendStatus(500);
          })
      }
    })
    /*  console.log(req.body)
     User.create(req.body)
         .then(results => res.json({data:results}))
         .catch(error=>{
           res.json({error:error, message:'Could not create a user'})
           res.sendStatus(500);
         }) */
};

//loginUser
//1. Verificamos que el email a escribir se encuentra almacenado en la BD
//2. Comparamos la contraseña que ingresamos con la contraseña almacenada en la BD
const loginUser = (req, res) => {
  //1.
  User.findOne({email: req.body.email})
    .then(result => {
      if(result){
        //2.
        console.log("Prueba Login", {input: req.body.password, passwordBD: resultPassword})
        //esta promesa de abajo devuelve algo un resultado si son iguales amabas contraseñas sino un error que son diferentes
        bcrypt.compare(req.body.password, result.password)
          .then(isCorrect => {
            if(isCorrect) {
              //si es correcto ambos passwords creamos nuestro payload que no es mas que la data del user.models.js
              const payload = {

              }
            }

          })
          //en caso de las contraseñas no ser iguales
          .catch(error => 
            res.json({error: error, message: "Invalidate Password"})
          )
      } else {
        res.json({error: true, message: "User not exist"})
      }
    })
    .catch(error => {//1.
      res.json({error:error, message:"User Invalidate"});
    })
}




module.exports = {deleteUser, registerUser, loginUser};