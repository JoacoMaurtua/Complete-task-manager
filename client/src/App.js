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
    </div>
  );
}

export default App;
