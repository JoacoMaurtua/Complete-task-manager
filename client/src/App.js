import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Form from './components/Form';
import TaskList from './components/TaskList';
import Detail from './components/Detail';
import Login from './components/Login';
import Register from './components/Register';
import Swal from 'sweetalert2';

export const MyContext = createContext();

function App() {

  //tasks
  const [tasks,setTasks] = useState([]);
  //users
  const [users, setUsers] = useState([]);
  //Loading
  const [loaded,setLoaded] = useState(false);
  

  useEffect(() =>{
   /*  axios.get('/api/tasks')
        .then(res=>{
          setTasks(res.data.data);
          setLoaded(true);
        }); */
        axios.get("/api/tasks")
            .then(response => {
              setTasks(response.data.data); 
              setLoaded(true);
            })
            .catch(err => Swal.fire({
              icon: "error",
              text: "Error in loading the data from tasks"
            }))
        axios.get("/api/users")
            .then(response => {
              setUsers(response.data.data);
              setLoaded(true);
            })
            .catch(err => Swal.fire({
              icon: "error",
              text: "Error in loading the data from users"
            }))
  },[]);

  return (
    <div className="container">
      <MyContext.Provider value={{tasks,setTasks}}>
        <Router>
          <Switch>
            <Route exact path={`/`}>
                <Login/>
            </Route>
            <Route exact path={`/register`}>
                <Register users={users} setUsers={setUsers}/>
            </Route>
            <Route exact path={`/task`}>
                <Form create={true}/>
            </Route>
            <Route exact path={`/tasks`}>
              {
                loaded? <TaskList list={tasks} setList={setTasks}/>:''
              }
            </Route>
            <Route exact path={`/tasks/:id`}>
              <Detail />
            </Route>
            <Route exact path={`/tasks/:id/edit`}>
                <Form update={true}/>
            </Route>
          </Switch>
        </Router>
      </MyContext.Provider>
    </div>
  );
}

export default App;
