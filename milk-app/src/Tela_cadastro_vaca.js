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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    marginTop: '1rem',
    width: '95%'
  },
  botao_voltar: {
    marginTop: '4rem',
    height: '5vh',
    fontWeight: "bolder",
    fontSize: '10px',
    alignSelf: 'left'
  },
  formControl: {
    margin: theme.spacing(1),
    width: '95%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
            variant="standard"
            margin="normal"
            fullWidth
            id="numero_vaca"
            label="Número do brinco"
            type="number"
            name="brinco"
            autoFocus />
      <TextField 
            className={classes.texto}
            variant="standard"
            margin="normal"
            fullWidth
            id="data_nascimento"
            type="date"
            label="Data Nascimento"
            autoFocus
            size= 'large'
            InputLabelProps={{ shrink: true }}
             />
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Raça</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Holandesa</MenuItem>
          <MenuItem value={20}>Jersey</MenuItem>
          <MenuItem value={30}>Pardo Suiço</MenuItem>
          <MenuItem value={40}>Zebu Leiteiras</MenuItem>
          <MenuItem value={50}>Gir</MenuItem>
          <MenuItem value={60}>Guzerá</MenuItem>
          <MenuItem value={70}>Sindi</MenuItem>
          <MenuItem value={80}>Girolando</MenuItem>
          <MenuItem value={90}>Outro</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Em lactação prenhe</MenuItem>
          <MenuItem value={20}>Em lactação vazia</MenuItem>
          <MenuItem value={30}>Seca</MenuItem>
          <MenuItem value={40}>Prenhe</MenuItem>
          <MenuItem value={50}>Bezerro</MenuItem>
          
        </Select>
      </FormControl>
      <TextField 
            className={classes.texto}
            variant="standard"
            margin="normal"
            fullWidth
            id="numero_vaca"
            label="Peso "
            type="Number"
            name="brinco"
            autoFocus />
        <Link_Router to="/tela_vacas_2">
          <Button
              className={classes.botao}
              type="submit"
              width='100%'
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

