const express = require('express');

const router = express();

const {findUsers,findSingleUser,createUser,updateUser, deleteUser} = require("../controllers/user.controllers");

//Rutas:

//encontrar todos los usuarios
router.get('/users',findUsers);

//encontrar un usuarios
router.get('/users/:id', findSingleUser);

//crear un usuario
router.post('/users/create',createUser);

//actualizar un usuario
router.put('/users/update/:id', updateUser);

//eliminar un usuario
router.delete('/users/delete/:id', deleteUser);

module.exports = router;

