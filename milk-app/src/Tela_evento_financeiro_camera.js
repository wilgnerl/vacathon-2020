import React from 'react';
import { Button, Container } from '@material-ui/core';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link as Link_Router} from "react-router-dom";
import Header from "./Header"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Webcam from "react-webcam";
 
const WebcamComponent = () => <Webcam />;

const videoConstraints = {
  facingMode: { exact: "environment" }
};

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
      <Link_Router to="/tela_financeiro_2">
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
      <h1 className={classes.titulo}>Cadastrar evento financeiro</h1>
      <h3 className={classes.descricao}>Para cadastrar um evento financeiro, precisamos saber sua categoria, valor e algumas particularidades.</h3>
      <Webcam
        audio={false}
        height={150}
        width={300}
        
        // videoConstraints={videoConstraints}
        screenshotFormat="image/jpeg"
      />
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ração</MenuItem>
          <MenuItem value={20}>Veterinário</MenuItem>
          <MenuItem value={30}>Vermífugo</MenuItem>
          <MenuItem value={40}>Combustível</MenuItem>
          <MenuItem value={50}>Conta</MenuItem>
          <MenuItem value={60}>Salários</MenuItem>
          <Link_Router to='./tela_evento_financeiro_leite'>
            <MenuItem value={70}>Venda de leite</MenuItem>
          </Link_Router>
          <MenuItem value={80}>Venda de gado</MenuItem>
          <MenuItem value={90}>Venda de adubo</MenuItem>
        </Select>
      </FormControl>
      <TextField 
            className={classes.texto}
            variant="standard"
            margin="normal"
            fullWidth
            id="numero_vaca"
            label="Valor (R$) "
            type="Number"
            name="Valor"
            autoFocus />
        <Link_Router to="/tela_financeiro_valores">
          <Button
              className={classes.botao}
              type="submit"
              width='100%'
              variant="contained"
              color="primary"
              >
                Adicionar evento
          </Button>
        </Link_Router>
    </form>
    </Container>
    
  );
}

