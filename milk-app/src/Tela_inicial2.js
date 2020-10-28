import React from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import { Link as Link_Router} from "react-router-dom";

function Tela_inicial() {
  return (
    <Link_Router to="/Tela_inicial">
      <Button
        fullWidth
        variant="contained"
        color="primary"
      >
        Tela 1
      </Button>
    </Link_Router>
  )
}

export default Tela_inicial;