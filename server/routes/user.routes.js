const express = require('express');

const router = express();

const {deleteUser, registerUser} = require("../controllers/user.controllers");

//Rutas:

//encontrar todos los usuarios
//router.get('/users',findUsers);

//encontrar un usuarios
//router.get('/users/:id', findSingleUser);


//actualizar un usuario
//router.put('/users/update/:id', updateUser);

//crear un usuario
router.post('/users/register', registerUser);

//eliminar un usuario
router.delete('/users/delete/:id', deleteUser);

module.exports = router;

