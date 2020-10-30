import React from 'react';
import { Button, Container } from '@material-ui/core';
import './App.css';
import Divider from '@material-ui/core/Divider';
import { Link as Link_Router} from "react-router-dom";
import Header from './Header'

export default function Tela_vacas() {

  return (
    <Container>
        <Header></Header>
        <h1 style={{marginTop:'4rem'}}>Animais na fazenda</h1>
        <h4 style={{opacity:'50%'}}>Aqui você encontra os dados de todas as vacas da fazenda, dividias em 4 categorias:</h4>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <ul style={{textAlign:'left'}}>
                <li><h2>Em lactação</h2></li>
            </ul>
            <ul>
                <li><h2>14</h2></li>
            </ul>
        </div>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", opacity:'50%'}}>
            <ul style={{textAlign:'left'}}>
                <li><h4 style={{margin:'0', marginLeft:'0.2rem'}}>Em lactação vazias</h4></li>
            </ul>
            <ul>
                <li><h4 style={{margin:'0'}}>6</h4></li>
            </ul>
        </div>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", opacity:'50%'}}>
            <ul style={{textAlign:'left'}}>
                <li><h4 style={{margin:'0.2rem', marginBottom:'1rem'}}>Em lactacão prenhes</h4></li>
            </ul>
            <ul>
                <li><h4 style={{margin:'0', marginBottom:'1rem'}}>8</h4></li>
            </ul>
        </div>
        <Divider/>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <ul style={{textAlign:'left'}}>
                <li><h2>Seca</h2></li>
            </ul>
            <ul>
                <li><h2>3</h2></li>
            </ul>
        </div>
        <Divider/>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <ul style={{textAlign:'left'}}>
                <li><h2>Bezerros</h2></li>
            </ul>
            <ul>
                <li><h2>5</h2></li>
            </ul>
        </div>
        <Divider/>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <ul style={{textAlign:'left'}}>
                <li><h2>Total</h2></li>
            </ul>
            <ul>
                <li><h2>22</h2></li>
            </ul>
        </div>
        <Divider/>
        <Link_Router to="/tela_cadastro_vaca">
        <Button
            style={{marginTop:'1.5rem',
                    fontSize:'15px',
                    fontWeight:'bolder'}}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            marginTop
            >
            Cadastrar vaca
        </Button>
        </Link_Router>
        <Link_Router to="/tela_lista_vacas">
        <Button
            style={{marginTop:'1.5rem',
                    fontSize:'15px',
                    fontWeight:'bolder',
                    marginBottom:'1rem'}}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            >
            Lista de vacas
        </Button>
        </Link_Router>
    </Container>
  );
}
