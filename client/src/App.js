import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Form from './components/Form';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path={`/`}>
              <Form create={true}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
