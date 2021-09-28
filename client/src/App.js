import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Form from './components/Form';
import TaskList from './components/TaskList';
import Detail from './components/Detail';

function App() {

  const [tasks,setTasks] = useState([]);
  const [loaded,setLoaded] = useState(false);

  useEffect(() =>{
    axios.get('/api/tasks')
        .then(res=>{
          setTasks(res.data.data);
          setLoaded(true);
        });
  },[]);

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path={`/`}>
              <Form create={true}/>
          </Route>
          <Route path={`/tasks`}>
            {
              loaded? <TaskList list={tasks}/>:''
            }
          </Route>
          <Route path={`/tasks/:id`}>
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
