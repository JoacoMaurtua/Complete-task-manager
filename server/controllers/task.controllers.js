const Task = require('../models/task.models');

const findTasks = (req,res) =>{
    Task.find({})
       .then(results => res.json({data: results}))
       .catch(error=>{
         res.json({error:error, message:'Tasks not found'})
         res.sendStatus(404)
       })
}


module.exports = {findTasks}