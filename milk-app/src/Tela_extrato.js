import React from 'react';
import { Button, Container } from '@material-ui/core';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Link as Link_Router} from "react-router-dom";
import Header from './Header'
import { red } from '@material-ui/core/colors';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { BrowserRouter } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '95%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  aumentar: {
      fontSize: "2rem",
  },
  botao_voltar: {
    height: '5vh',
    fontWeight: "bolder",
    fontSize: '10px',
    alignSelf: 'left',
    marginBottom:0
  },
  valor:{
    color:'#FF0000'
   },
  formControl: {
    minWidth: 160,
    marginBottom:'1rem'
  },
  mes: {
    margin:0
  }
}));

export default function Tela_extrato() {
  const classes = useStyles();

  const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

  return (
    <List className={classes.root}>
        <div style={{display:'flex', flexDirection:'row', marginTop:'4rem', marginLeft:'0.5rem'}}>
            <Link_Router to='./tela_financeiro_valores'>
            <Button
              className={classes.botao_voltar}
              type="submit"
              variant="contained"
              color="primary"
              >
                Voltar
            </Button>
            </Link_Router>
        <h2 style={{marginTop:'0', marginLeft:'4rem', marginBottom:'2rem'}}>Extrato</h2>
      </div>
      <Header/>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
        <h2 className={classes.mes}> Mês: </h2>
        <FormControl className={classes.formControl}>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={age}
            onChange={handleChange}
            defaultValue={{value:5}}
          >
            <MenuItem value={1}>Janeiro</MenuItem>
            <MenuItem value={2}>Fevereiro</MenuItem>
            <Link_Router to='/tela_extrato_valores'>
                <MenuItem value={3}>Março</MenuItem>
            </Link_Router>
            <MenuItem value={4}>Abril</MenuItem>
            <MenuItem value={5}>Maio</MenuItem>
            <MenuItem value={6}>Junho</MenuItem>
            <MenuItem value={7}>Julho</MenuItem>
            <MenuItem value={8}>Agosto</MenuItem>
            <MenuItem value={9}>Setebro</MenuItem>
            <MenuItem value={10}>Outubro</MenuItem>
            <MenuItem value={11}>Novembro</MenuItem>
            <MenuItem value={12}>Dezembro</MenuItem>
          </Select>
        </FormControl>
        </div>
      </List>
      
      
    );
}
