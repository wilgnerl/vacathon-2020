import React from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import Login from './SignIn';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { RoundedCorner } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
      margin: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '92%',
    },
  titulo: {
      
  },
  descricao: {
      opacity: '50%',
  },
  botao: {
    marginTop: theme.spacing(5),
    height: '10vh',
    fontWeight: "bolder",
    fontSize: '20px',
    alignSelf: 'flex-end'
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <h1 className={classes.titulo}>Adicionar evento</h1>
      <h3 className={classes.descricao}>Precisamos de apenas duas informações aqui: qual o número de identificação da sua vaca e quanto de leite ela produziu hoje.</h3>
      <TextField 
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="numero_vaca"
            label="Número do brinco "
            name="brinco"
            autoFocus />
      <TextField 
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="numero_vaca"
            label="Litros de leite "
            name="litros"
            autoFocus
            size= 'large'
             />
        <Button
            className={classes.botao}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            >
              Adicionar
        </Button>
    </form>

    
  );
}

