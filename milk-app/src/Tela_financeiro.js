import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import './Financeiro.css';
import { Link as Link_Router} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { CenterFocusStrong } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: 16,
      paddingRight:16,
      alignItems: 'center',
    },
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(2),
      minWidth: 160,
    },
  }));

  

export default function ControlledOpenSelect() {
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
  
    const messs = 'Janeiro';
    return (

        <div className={classes.paper}>
        
        
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
            <MenuItem value={3}>Março</MenuItem>
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

        <div>
            <p>Saldo: R$5.072,94</p>
            <p>Gastos: R$986,21</p>
            <p>Ganhos: R$1.344,80</p>
        </div>

    {/* <Link_Router to="/"> */}
      <Button 
        className={classes.button}
        fullWidth
        variant="contained"
        color="primary"
      >
        Cadastrar
      </Button>
    {/* </Link_Router> */}

      <Button
        className={classes.button}
        fullWidth
        variant="contained"
        color="primary"
      >
        Relatório
      </Button>
      <Button
        className={classes.button}
        fullWidth
        variant="contained"
        color="primary"
      >
        Extrato
      </Button>
      </div>
    );
  }