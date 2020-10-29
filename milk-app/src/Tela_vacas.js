import React from 'react';
import { Button, Container } from '@material-ui/core';
import './App.css';
import Divider from '@material-ui/core/Divider';
import { Link as Link_Router} from "react-router-dom";

export default function Tela_vacas() {

  return (
    <Container>
        <h1 style={{marginTop:'4rem'}}>Animais na fazenda</h1>
        <h4 style={{opacity:'50%'}}>Aqui você encontra os dados de todas as vacas da fazenda, dividias em 4 categorias:</h4>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <ul style={{textAlign:'left'}}>
                <li><h2>Lactação</h2></li>
            </ul>
            <ul>
                <li><h2>12</h2></li>
            </ul>
        </div>
        <Divider/>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <ul style={{textAlign:'left'}}>
                <li><h2>Entrepartos</h2></li>
            </ul>
            <ul>
                <li><h2>2</h2></li>
            </ul>
        </div>
        <Divider/>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <ul style={{textAlign:'left'}}>
                <li><h2>Prenha</h2></li>
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
                <li><h2>4</h2></li>
            </ul>
        </div>
        <Divider/>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <ul style={{textAlign:'left'}}>
                <li><h2>Total</h2></li>
            </ul>
            <ul>
                <li><h2>21</h2></li>
            </ul>
        </div>
        <Divider/>
        <Link_Router to="/tela_cadastro_vacas">
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
        <Link_Router to="/tela_lista_vaca">
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
