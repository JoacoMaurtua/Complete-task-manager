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

const createUser = (req,res) =>{
  console.log(req.body)
  User.create(req.body)
      .then(results => res.json({data:results}))
      .catch(error=>{
        res.json({error:error, message:'Could not create a user'})
        res.sendStatus(500);
      })
};








module.exports = {findUsers,findSingleUser,createUser};