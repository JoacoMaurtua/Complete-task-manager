import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {DateTimePicker} from '@material-ui/pickers';
import {Link, useHistory, useParams} from 'react-router-dom';
import { MyContext } from '../App';
import Swal from 'sweetalert2';
//import Cookies from 'universal-cookie';
import jwt_decode from "jwt-decode";


export default function Form({create,update, loaded}) {

  //const cookies = new Cookies();
  //cookies.set('usertoken', 'data', { path: '/' });
  //console.log({cookiesAuth: cookies.get('usertoken')}); // Pacman
  /* const token = document.cookie.split("=")[1];
  if(token){
    const userObject = jwt_decode(token);
    //console.log({cookiesAuth: userObject})
    //console.log({cookiesAuth: document.cookie});
    const userNameActual=userObject.userName;
    console.log({userNameActual: userNameActual});
  } */
  
  //const [cookies ] = useCookies(['usertoken']);
  //const cookieForm = Cookies.get('usertoken')
  //console.log(cookieForm)

  const {tasks,setTasks} = useContext(MyContext);

  //console.log({estadoActivo: loaded});


  const [dateSelected, setDateSelected] = useState(new Date());
  console.log(dateSelected);

  const {id} = useParams();

  const history = useHistory();

  const [taskInput, setTaskInput] = useState({
    title:'',
    date:dateSelected,
    description:''
  });

  const taskList = (event) => {
    history.push(`/tasks`);
  }

  const handleOnChange =e=>{
    const {name,value} = e.target;
    setTaskInput({
      ...taskInput,
      [name]:value
    })
  };

  //Funcion para crear una tarea en la base de datos:
  const addTasks =(event)=>{
    axios.post('api/tasks/create',taskInput)
        .then(res=>{
          if(res.data.data){
            taskList(event);
            setTasks(tasks.concat([res.data.data]))
            Swal.fire({
              icon:'success',
              title:'Added task!',
              text: 'A task was added successfully'
            })
          }else{
            alert(res.data.error.message)
          }
        })
        .catch(err => console.log(err))
  }

  //traer la ruta de la tarea con la que hara match la consulta
  useEffect(()=>{
    if(id){
      axios.get(`/api/tasks/${id}`)
          .then(res => setTaskInput(res.data.data))
    }
  },[id])


  const updateTask =()=>{
    axios.put(`/api/tasks/update/${id}`,taskInput)
        .then(res => {
          const index = tasks.findIndex(result => result._id === id)
          tasks.splice(index,1,taskInput);
          setTasks(tasks);
          Swal.fire({
            icon:'success',
            title:'Edited task!',
            text: 'A task was edited successfully'
          })
        });
  }

  const handleOnSubmit =e=>{
    e.preventDefault();

    if(id) {updateTask()}
      
    else{addTasks()}
    
  }

  




  const {title,description} = taskInput;

  
  //return (loaded) ?
  return (
      <div className="formContainer">
        
        {/* <Link to={'/'} style={{textDecoration:'none'}}>
            <p className="tasksLink">log-out</p>
        </Link> */}
        {
          create?<h2 style={{marginTop:"0rem"}}>Create a new Task</h2>:update?<h2>Update this task</h2>:''
        }
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            className="app-input"
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
              className="app-input"
              name="description"
              value={description}
              id="textarea"
              cols='30' rows='7.5'
              onChange={handleOnChange}   
          ></textarea>

          {
            create?<button className = "taskButton" type="submit">Create task</button>:
            update?<button className = "taskButton" type="submit">Edit task</button>:
            ''
          }
    
          <Link to={'/tasks'} style={{textDecoration:'none'}}>
            <p className="tasksLink">See all my tasks</p>
          </Link>
          
        </form>      
      </div>
    ) //: (<div style={{fontSize:"2.5rem"}}>UFFFFFF you must first log in to see the content!!!!!</div>);
}