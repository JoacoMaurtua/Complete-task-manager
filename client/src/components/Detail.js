import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';


export default function Detail() {
  const [singleTask, setSingleTask] = useState([]);
  const {id} = useParams();
  const history = useHistory();

  useEffect(()=>{
    axios.get(`/api/tasks/${id}`)
         .then(res => setSingleTask(res.data.data))
  },[id]);

  const taskList =e=>{
    history.push('/tasks')
  }

  const firstDate = new Date(singleTask.date);
  let time = firstDate.getDate() + "/"
                + (firstDate.getMonth()+1)  + "/" 
                + firstDate.getFullYear() + " "
                + firstDate.getHours() + ":"
                + firstDate.getMinutes() + ":" 
                + firstDate.getSeconds();
  //console.log(time);

  
  return (
    <div className="detail-container">
      <button className="btn-back task-btn" onClick={e => taskList(e)}>
          <i class="fas fa-arrow-circle-left"></i>
      </button>
      <h2>Task Detail</h2>
      <p><span>Title:</span> {singleTask.title}</p>
      <p><span>Date:</span> {time}</p>
      {
         singleTask.description&&( <p><span>Description:</span> {singleTask.description}</p>)
      }
     
    </div>
  )
}
