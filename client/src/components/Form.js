import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {DateTimePicker} from '@material-ui/pickers';

export default function Form({create,update}) {

  const [dateSelected, setDateSelected] = useState(new Date());

  console.log(dateSelected)

  return (
    <div className="formContainer">
      {
        create?<h2>Create a new Task</h2>:update?<h2>Update this task</h2>:''
      }
      <form>
        <label htmlFor="title"Title>Title: </label>
        <input
          id="title"
          type="text"        
        />

        <label htmlFor='date'>Date: </label>
        <DateTimePicker 
          value={dateSelected}
          onChange={setDateSelected}
        />

      </form>
      
    </div>
  )
}
