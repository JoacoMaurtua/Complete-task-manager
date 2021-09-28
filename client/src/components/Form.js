import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {DateTimePicker} from '@material-ui/pickers';
import {Link} from 'react-router-dom';

export default function Form({create,update}) {

  const [dateSelected, setDateSelected] = useState(new Date());
  console.log(dateSelected);

  const [taskInput, setTaskInput] = useState({
    title:'',
    date:dateSelected,
    description:''
  });

  const handleOnChange =e=>{
    const {name,value} = e.target;
    setTaskInput({
      ...taskInput,
      [name]:value
    })
  };

  //Funcion para crear una tarea en la base de datos:
  const addTasks =()=>{
    axios.post('api/tasks/create',taskInput)
        .then(res=>{
          if(res.data.data){
            console.log(res.data.data)
          }else{
            alert(res.data.error.message)
          }
        })
        .catch(err => console.log(err))
  }

  const handleOnSubmit =e=>{
    e.preventDefault();
    addTasks()
    
 
  }

  const {title,description} = taskInput;

  return (
    <div className="formContainer">
      {
        create?<h2>Create a new Task</h2>:update?<h2>Update this task</h2>:''
      }
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="title"Title>Title: </label>
        <input
          name="title"
          value={title}
          id="title"
          type="text"
          onChange={handleOnChange}        
        />

        <label htmlFor='date'>Date: </label>
        <DateTimePicker className="datePicker"
          name="date"
          style={{marginBottom:'3rem', color:'white'}} 
          value={dateSelected}
          onChange={setDateSelected}
        />

        <label htmlFor='textarea'>Description: </label>
        <textarea
            name="description"
            value={description}
            id="textarea"
            cols='30' rows='7.5'
            onChange={handleOnChange}   
        ></textarea>

        <button className = "taskButton" type="submit">Crear tarea</button>

        <Link style={{textDecoration:'none'}}>
          <p>Ver todas las tareas</p>
        </Link>
        

      </form>
      
    </div>
  )
}
