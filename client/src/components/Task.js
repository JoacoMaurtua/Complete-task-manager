import React from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router';
import axios from 'axios'; 

export default function Task({task,setTaskList}) {
  const {id} = useParams();

  const deleteTask = id =>{
    axios.delete(`/api/tasks/delete/${id}`)
          .then(res=>{
            const newTasksList = task.filter((actualTasks) => actualTasks._id !== id);
            setTaskList(newTasksList);
          })
  }

  return (
    <li className="list-item">
      <Link to={`/tasks/${task._id}`} style={{textDecoration:'none', color:'#fff'}}>
          <span>{task.title}</span>
      </Link>
     
      <div className="list-item--buttons">
        
        <Link to = {`/tasks/${task._id}/edit`}>
          <button className="btn-edit task-btn">
            <i className="fas fa-pen"></i>
          </button>
        </Link>
         

          <button className="btn-delete task-btn" onClick={e => deleteTask(task._id)}>
            <i className="fas fa-trash-alt"></i>
          </button>
          
      </div>
      
    </li>
  )
}
