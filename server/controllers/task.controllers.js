const Task = require('../models/task.models');

const findTasks = (req,res) =>{
    Task.find({})
       .then(results => res.json({data: results}))
       .catch(error=>{
         res.json({error:error, message:'Tasks not found'})
         res.sendStatus(404)
       })
};


const findSingleTask = (req,res) =>{
    Task.findOne({_id:req.params.id})
        .then(results => res.json({data:results}))
        .catch(error=>{
          res.json({error:error, message:'Task not found'})
          res.sendStatus(404);
        })

};

const createTask = (req,res) =>{
  console.log(req.body)
  Task.create(req.body)
      .then(results => res.json({data:results}))
      .catch(error=>{
        res.json({error:error, message:'Could not create a task'})
        res.sendStatus(500);
      })
};

const updateTask = (req,res) =>{
    Task.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
    .then(results => res.json({data:results}))
      .catch(error=>{
        res.json({error:error, message:'Could not update a task'})
        res.sendStatus(500);
      })

};


const deleteTask =(req,res) =>{
    Task.deleteOne({_id:req.params.id})
    .then(results => res.json({data:results}))
      .catch(error=>{
        res.json({error:error, message:'Could not delete a task'})
        res.sendStatus(202);
      })
}


module.exports = {findTasks, findSingleTask, createTask, updateTask, deleteTask};