import React from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import { Link as Link_Router} from "react-router-dom";

function Tela_inicial() {
    return (
      <Link_Router to="/">
      <Button
        fullWidth
        variant="contained"
        color="primary"
        >
        Voltar
      </Button>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        >
        Tela2
      </Button>
    </Link_Router>
  );
}

function Tela_inicial2() {
  return (
    <Link_Router to="/Tela_inicial2">
      <Button
        fullWidth
        variant="contained"
        color="primary"
        >
        Tela 2
      </Button>
    </Link_Router>
  )
}

export default Tela_inicial;