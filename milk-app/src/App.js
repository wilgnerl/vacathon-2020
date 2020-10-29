import React from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './SignIn';
import Tela_inicial from './Tela_inicial';
import Tela_evento_leite from './Tela_evento_leite';
import Tela_vacas_1 from './Tela_vacas_1';
import Tela_vacas_2 from './Tela_vacas_2';
import Tela_lista_vacas from './Tela_lista_vacas';
import Tela_info_vaca from './Tela_info_vaca';
import Tela_inicial2 from './Tela_inicial2';
import Tela_financeiro from './Tela_financeiro';
import Header from './Header'
import Tela_leite_1 from './Tela_leite_1'
import Tela_leite_2 from './Tela_leite_2'
import Tela_cadastro_vaca from './Tela_cadastro_vaca'
import tela_relatorio from './Tela_relatorio'

function App() {
  return (
    <Router>
      <div className="App">
      {window.location.pathname!=='/login' ? <Header/>:null}
        <Switch>
          <Route path="/login" exact component={Login}/>
          <Route path="/tela_leite_1" exact component={Tela_leite_1}/>
          <Route path="/tela_leite_2" exact component={Tela_leite_2}/>
          <Route path="/tela_cadastro_vaca" exact component={Tela_cadastro_vaca}/>
          <Route path="/tela_inicial" component={Tela_inicial}/>
          <Route path="/tela_evento_leite" component={Tela_evento_leite}/>
          <Route path="/tela_vacas_1" component={Tela_vacas_1}/>
          <Route path="/tela_vacas_2" component={Tela_vacas_2}/>
          <Route path="/tela_lista_vacas" component={Tela_lista_vacas}/>
          <Route path="/tela_info_vaca" component={Tela_info_vaca}/>
          <Route path="/tela_inicial2" component={Tela_inicial2}/>
          <Route path="/Tela_financeiro" component={Tela_financeiro}/>
          <Route path="/Tela_relatorio" component={tela_relatorio}/>
          <Route path='/Tela_financeiro_valores' component={Tela_financeiro_valores}/>
        </Switch>
      </div>
    </Router>
    );
}

export default App;