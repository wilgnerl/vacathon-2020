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
      margin: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '92%',
    },
  titulo: {
      marginTop: '1rem'
  },
  descricao: {
      marginTop: '1em',
      opacity: '50%',
  },
  botao: {
    marginTop: '4rem',
    height: '10vh',
    fontWeight: "bolder",
    fontSize: '20px',
    alignSelf: 'flex-end'
  },
  texto: {
    marginTop: '2rem'
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
      <Link_Router to="/tela_leite_1">
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
      <h1 className={classes.titulo}>Adicionar evento</h1>
      <h3 className={classes.descricao}>Precisamos de apenas duas informações aqui: qual o número de identificação da sua vaca e quanto de leite ela produziu hoje.</h3>
      <TextField 
            className={classes.texto}
            variant="standard"
            margin="normal"
            fullWidth
            id="numero_vaca"
            label="Número do brinco "
            type='number'
            name="brinco"
            autoFocus />
      <TextField 
            variant="standard"
            margin="normal"
            fullWidth
            id="numero_vaca"
            label="Litros de leite "
            name="litros"
            type='number'
            autoFocus
            size= 'large'
             />
        <Link_Router to="/tela_leite_2">
          <Button
              className={classes.botao}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              >
                Adicionar
          </Button>
        </Link_Router>
    </form>
    </Container>
    
  );
}

