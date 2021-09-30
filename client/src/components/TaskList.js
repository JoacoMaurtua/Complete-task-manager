import React from 'react';
import {useHistory,useParams} from 'react-router-dom';
import Task from './Task';
import axios from 'axios';
import Swal from 'sweetalert2';


function TaskList({list,setList}) {
  const history = useHistory();
  const {id} = useParams();
  
  const taskForm = e =>{
    history.push('/')
  }; 

  const deleteTask = id =>{
    Swal.fire({
      title:'Alert',
      text:'Are you sure you want to delete this task?',
      icon:'warning',
      showCancelButton:true
    }).then(result=>{
      if(result.value){
        axios.delete(`/api/tasks/delete/${id}`)
          .then(res=>{
            const newTasksList = list.filter((actualTasks) => actualTasks._id !== id);
            setList(newTasksList);
          })
          .catch(err => Swal.fire({
            icon:'error',
            title:'Error while deleting',
            text:'An error occurred while deleting'
          }))
      }
    })
   
  }

  return (
    <div className="taskList-container">
      <button className="btn-back task-btn" onClick={e => taskForm(e)}>
          <i class="fas fa-arrow-circle-left"></i>
      </button>
      <h2>My tasks to do</h2>
      <ul className="list">
        {
          list.map((task,index)=>(
            <Task key={index} task={task} functionD={deleteTask}/>
          ))
        }
      </ul>
 
    </div>
  )
}

export default TaskList
