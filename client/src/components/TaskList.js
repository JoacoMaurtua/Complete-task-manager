import React from 'react';
import {useHistory,Link,useParams} from 'react-router-dom';
import axios from 'axios';

function TaskList({list}) {
  const history = useHistory();

  const taskForm = e =>{
    history.push('/')
  }; 

  return (
    <div className="taskList-container">
      <button className="btn back" onClick={e => taskForm(e)}>
          <i class="fas fa-arrow-circle-left"></i>
      </button>
      <h2>My tasks to do</h2>
      {
        list.map((task,index)=>(
          <div className="taskList-container--list" key={index}>
              <p>{task.title}</p>
          </div>
        ))
      }
      
    </div>
  )
}

export default TaskList
