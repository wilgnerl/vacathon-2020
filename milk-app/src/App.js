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
import Tela_relatorio from './Tela_relatorio'
import Tela_relatorio_valores from './Tela_relatorio_valores'
import Tela_financeiro_valores from './Tela_financeiro_valores'
import Tela_extrato from './Tela_extrato'
import Tela_extrato_valores from './Tela_extrato_valores'
import Tela_evento_financeiro from './Tela_evento_financeiro'
import Tela_evento_financeiro_leite from './Tela_evento_financeiro_leite'
import { Helmet } from 'react-helmet';

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet htmlAttributes={{ lang: 'pt-br' }}>
                <meta charSet="utf-8" />
                <title>Nosso Leite</title>
        </Helmet>
        <Switch>
          <Route path="/" exact component={Login}/>
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
          <Route path="/tela_financeiro" component={Tela_financeiro}/>
          <Route path="/tela_financeiro_valores" component={Tela_financeiro_valores}/>
          <Route path="/tela_relatorio" component={Tela_relatorio}/>
          <Route path="/tela_relatorio_valores" component={Tela_relatorio_valores}/>
          <Route path='/tela_extrato' component={Tela_extrato}/>
          <Route path='/tela_extrato_valores' component={Tela_extrato_valores}/>
          <Route path='/tela_evento_financeiro' component={Tela_evento_financeiro}/>
          <Route path='/tela_evento_financeiro_leite' component={Tela_evento_financeiro_leite}/>
          
        </Switch>
      </div>
    </Router>
    );
}

export default App;