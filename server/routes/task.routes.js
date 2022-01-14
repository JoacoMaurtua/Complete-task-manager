const express = require('express');

const router = express();

const {findTasks, findSingleTask, createTask, updateTask, deleteTask} = require('../controllers/task.controllers');
//importar credenciales de seguridad
const { authenticate } = require('../config/jwt.config');

//Rutas:

//encontrar todas las tareas
router.get('/tasks',authenticate, findTasks);

//encontrar una tarea
router.get('/tasks/:id',authenticate, findSingleTask);

//crear una tarea
router.post('/tasks/create',authenticate, createTask);

//actualizar una tarea
router.put('/tasks/update/:id',authenticate, updateTask);

//eliminar una tarea
router.delete('/tasks/delete/:id',authenticate, deleteTask);


module.exports = router;

