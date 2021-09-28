import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';


export default function Detail() {
  const [singleTask, setSingleTask] = useState([]);
  const {id} = useParams();
  const history = useHistory();

  useEffect(()=>{
    axios.get(`/api/tasks/${IdleDeadline}`)
         .then(res => setSingleTask(res.data.data))
  },[id]);

  const taskList =e=>{
    history.push('/tasks')
  }

  return (
    <div className="detail-container">
      <button className="btn-back task-btn" onClick={e => taskList(e)}>
          <i class="fas fa-arrow-circle-left"></i>
      </button>
      <h2>Task Detail</h2>
      <p>Title: {singleTask.title}</p>
      <p>Date: {singleTask.date}</p>
      <p>Description: {singleTask.description}</p>
    </div>
  )
}
