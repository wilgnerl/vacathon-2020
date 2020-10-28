import React from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import Login from './SignIn';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Tela_inicial from './Tela_inicial';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/tela_inicial" component={Tela_inicial}/>
        </Switch>
      </div>
    </Router>
    );
}

export default App;