import React from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router';
import axios from 'axios';

export default function Task({task}) {
  return (
    <li className="list-item">
      <span>{task.title}</span>
      <div className="list-item--buttons">
        <button className="btn-delete task-btn">
            <i className="fas fa-trash-alt"></i>
          </button>

          <button className="btn-edit task-btn">
            <i className="fas fa-pen"></i>
          </button>
      </div>
      
    </li>
  )
}
