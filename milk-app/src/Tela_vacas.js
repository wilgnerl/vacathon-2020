import React from 'react';
import { Button, Container } from '@material-ui/core';
import './App.css';
import Divider from '@material-ui/core/Divider';

export default function Tela_vacas() {

  return (
    <Container>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <ul style={{textAlign:'left'}}>
                <li><h2><b>Estado</b></h2></li>
            </ul>
            <ul style={{textAlign:'center'}}>
                <li><h2><b>Quantidade</b></h2></li>
            </ul>
        </div>
        <Divider/>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <ul style={{textAlign:'left'}}>
                <li><h3>Lactação</h3></li>
            </ul>
            <ul>
                <li><h3>12</h3></li>
            </ul>
        </div>
        <Divider/>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <ul style={{textAlign:'left'}}>
                <li><h3>Entrepartos</h3></li>
            </ul>
            <ul>
                <li><h3>2</h3></li>
            </ul>
        </div>
        <Divider/>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <ul style={{textAlign:'left'}}>
                <li><h3>Prenha</h3></li>
            </ul>
            <ul>
                <li><h3>3</h3></li>
            </ul>
        </div>
        <Divider/>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <ul style={{textAlign:'left'}}>
                <li><h3>Bezerros</h3></li>
            </ul>
            <ul>
                <li><h3>4</h3></li>
            </ul>
        </div>
        <Divider/>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <ul style={{textAlign:'left'}}>
                <li><h3>Total</h3></li>
            </ul>
            <ul>
                <li><h3>21</h3></li>
            </ul>
        </div>
        <Divider/>
        <Button
            //className={classes.botao}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            >
            Cadastrar
        </Button>
        <Button
            //className={classes.botao}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            >
            Lista
        </Button>
    </Container>
  );
}
