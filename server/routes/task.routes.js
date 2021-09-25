const express = require('express');

const router = express();

const {findTasks, findSingleTask, createTask, updateTask, deleteTask} = require('../controllers/task.controllers');

//Rutas:

//encontrar todas las tareas
router.get('/tasks', findTasks);

//encontrar una tarea
router.get('/tasks/:id',findSingleTask);

//crear una tarea
router.post('/tasks/create',createTask);

//actualizar una tarea
router.put('/tasks/update/:id',updateTask);

//eliminar una tarea
router.delete('/tasks/delete/:id',deleteTask);


module.exports = router;

