import React from 'react';
import {Link} from 'react-router-dom';
/* import { useParams } from 'react-router';
import axios from 'axios'; */

export default function Task({task}) {
  return (
    <li className="list-item">
      <Link to={`/tasks/${task._id}`} style={{textDecoration:'none', color:'#fff'}}>
          <span>{task.title}</span>
      </Link>
     
      <div className="list-item--buttons">
        
          <button className="btn-edit task-btn">
            <i className="fas fa-pen"></i>
          </button>

          <button className="btn-delete task-btn">
            <i className="fas fa-trash-alt"></i>
          </button>
          
      </div>
      
    </li>
  )
}
