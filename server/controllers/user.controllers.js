const User = require('../models/user.models');

const findUsers = (req,res) =>{
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

const createUser = (req,res) =>{ //Register
  console.log(req.body)
  User.create(req.body)
      .then(results => res.json({data:results}))
      .catch(error=>{
        res.json({error:error, message:'Could not create a user'})
        res.sendStatus(500);
      })
};

const updateUser =(req,res) =>{
  User.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
      .then(results => res.json({data:results}))
      .catch(error=>{
        res.json({error:error, message:'Could not update a user'})
        res.sendStatus(500);
      })
};

const deleteUser =(req,res) =>{
  User.deleteOne({_id:req.params.id})
  .then(results => res.json({data:results}))
    .catch(error=>{
      res.json({error:error, message:'Could not delete a user'})
      res.sendStatus(500);
    })
}




module.exports = {findUsers,findSingleUser,createUser,updateUser, deleteUser};