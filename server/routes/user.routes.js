const express = require('express');

const router = express();

const {findUsers, deleteUser, registerUser, loginUser, logoutUser} = require("../controllers/user.controllers");
//importar credenciales de seguridad
//Obs Login y register no necesitan credenciales de seguridad por obvias razones
const { authenticate } = require('../config/jwt.config');

//Rutas:

//encontrar todos los usuarios
router.get('/users', authenticate, findUsers);

//encontrar un usuarios
//router.get('/users/:id', findSingleUser);


//actualizar un usuario
//router.put('/users/update/:id', updateUser);

//eliminar un usuario
router.delete('/users/delete/:id',  authenticate, deleteUser);

//crear un usuario
router.post('/users/register', registerUser);

//log-in usuario
router.post('/users/login', loginUser);

//logout usuario
router.get('/users/logout', authenticate, logoutUser);

module.exports = router;


