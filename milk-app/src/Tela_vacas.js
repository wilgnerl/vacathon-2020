import React from 'react';
import { Button, Container } from '@material-ui/core';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default function BasicTable() {
  const classes = useStyles();

  return (
    <Container>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell><b>CATEGORIA</b></TableCell>
                <TableCell align="center"><b>QUANTIDADE</b></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.categoria}>
                <TableCell component="th" scope="row">
                    {row.categoria}
                </TableCell>
                <TableCell align="center">{row.quantidade}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    <Button
        className={classes.botao}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        >
        Cadastrar
    </Button>
    <Button
        className={classes.botao}
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
