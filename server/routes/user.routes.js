const express = require('express');

const router = express();

const {findUsers, deleteUser, registerUser, loginUser} = require("../controllers/user.controllers");

//Rutas:

//encontrar todos los usuarios
router.get('/users',findUsers);

//encontrar un usuarios
//router.get('/users/:id', findSingleUser);


//actualizar un usuario
//router.put('/users/update/:id', updateUser);

//eliminar un usuario
router.delete('/users/delete/:id', deleteUser);

//crear un usuario
router.post('/users/register', registerUser);

//log-in usuario
router.post('/users/login', loginUser);

module.exports = router;

