import React from 'react';

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
