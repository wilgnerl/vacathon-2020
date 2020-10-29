import React from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './SignIn';
import Tela_inicial from './Tela_inicial';
import Tela_evento_leite from './Tela_evento_leite';
import Tela_vacas from './Tela_vacas';
import Tela_lista_vacas from './Tela_lista_vacas';
import Tela_info_vaca from './Tela_info_vaca';
import Tela_inicial2 from './Tela_inicial2';
import Tela_financeiro from './Tela_financeiro';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/tela_inicial" component={Tela_inicial}/>
          <Route path="/tela_evento_leite" component={Tela_evento_leite}/>
          <Route path="/tela_vacas" component={Tela_vacas}/>
          <Route path="/tela_lista_vacas" component={Tela_lista_vacas}/>
          <Route path="/tela_info_vaca" component={Tela_info_vaca}/>
          <Route path="/tela_inicial" component={Tela_inicial}/>]
          <Route path="/tela_inicial2" component={Tela_inicial2}/>
          <Route path="/Tela_financeiro" component={Tela_financeiro}/>
        </Switch>
      </div>
    </Router>
    );
}

export default App;