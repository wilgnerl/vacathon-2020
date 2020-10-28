import React from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import Login from './SignIn';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Tela_inicial from './Tela_inicial';
import Tela_inicial2 from './Tela_inicial2';
import Tela_financeiro from './Tela_financeiro';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/tela_inicial" component={Tela_inicial}/>]
          <Route path="/tela_inicial2" component={Tela_inicial2}/>
          <Route path="/Tela_financeiro" component={Tela_financeiro}/>
        </Switch>
      </div>
    </Router>
    );
}

export default App;