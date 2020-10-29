import React from 'react';
import { Button, Container } from '@material-ui/core';
import './App.css';
import Login from './SignIn';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { RoundedCorner } from '@material-ui/icons';
import { Link as Link_Router} from "react-router-dom";
import Header from "./Header"

const useStyles = makeStyles((theme) => ({
  root: {
      margin: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '95%',
    },
  titulo: {
      marginTop: '0rem'
  },
  descricao: {
      marginTop: '0',
      opacity: '50%',
  },
  botao: {
    marginTop: '1rem',
    height: '8vh',
    fontWeight: "bolder",
    fontSize: '15px',
    alignSelf: 'flex-end'
  },
  texto: {
    marginTop: '1rem'
  },
  botao_voltar: {
    marginTop: '4rem',
    height: '5vh',
    fontWeight: "bolder",
    fontSize: '10px',
    alignSelf: 'left'
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <Container>
    <Header></Header>
    <div style={{display:'flex', alignSelf:'flex-start'}}>
      <Link_Router to="/tela_vacas_1">
      <Button
              className={classes.botao_voltar}
              type="submit"
              variant="contained"
              color="primary"
              >
                Voltar
      </Button>
      </Link_Router>
    </div>
    <form className={classes.root} noValidate autoComplete="off">
      <h1 className={classes.titulo}>Cadastrar vaca</h1>
      <h3 className={classes.descricao}>Para cadastrar um animal, basta preencher esse 5 campos.</h3>
      <TextField 
            className={classes.texto}
            variant="outlined"
            margin="normal"
            fullWidth
            id="numero_vaca"
            label="Número do brinco"
            name="brinco"
            autoFocus />
      <TextField 
            variant="outlined"
            margin="normal"
            fullWidth
            id="numero_vaca"
            label="Data Nascimento"
            name="litros"
            autoFocus
            size= 'large'
             />
        <TextField 
            className={classes.texto}
            variant="outlined"
            margin="normal"
            fullWidth
            id="numero_vaca"
            label="Raça"
            name="brinco"
            autoFocus />
        <TextField 
            className={classes.texto}
            variant="outlined"
            margin="normal"
            fullWidth
            id="numero_vaca"
            label="Categoria"
            name="brinco"
            autoFocus />
        <TextField 
            className={classes.texto}
            variant="outlined"
            margin="normal"
            fullWidth
            id="numero_vaca"
            label="Peso "
            name="brinco"
            autoFocus />
        <Link_Router to="/tela_vacas_2">
          <Button
              className={classes.botao}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              >
                Adicionar vaca
          </Button>
        </Link_Router>
    </form>
    </Container>
    
  );
}

