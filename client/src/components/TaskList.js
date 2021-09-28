import React from 'react';
import {useHistory} from 'react-router-dom';
import Task from './Task';


function TaskList({list}) {
  const history = useHistory();

  const taskForm = e =>{
    history.push('/')
  }; 

  return (
    <div className="taskList-container">
      <button className="btn-back task-btn" onClick={e => taskForm(e)}>
          <i class="fas fa-arrow-circle-left"></i>
      </button>
      <h2>My tasks to do</h2>
      <ul className="list">
        {
          list.map((task,index)=>(
            <Task key={index} task={task}/>
          ))
        }
      </ul>
 
    </div>
  )
}

export default TaskList
