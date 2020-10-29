import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Container } from '@material-ui/core';
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
    }
  }));

function Tela_info_vaca() {
    const classes = useStyles();
  return (
    <Container>
        <div style={{display:"flex", flexDirection:"row"}}>
        <List className={classes.root}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/676/676208.svg" variant='square'/>
            </ListItemAvatar>
            <ListItemText
            alignItems='center'
            primary="Número: 039"
            secondary={
                <React.Fragment className={classes.aumentar}>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Estado: Prenha
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        </List>
        <Button
            className={classes.botao}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{width: "7rem",
                    fontWeight: 'bolder',
                    margin:"1rem"}}
            >
              Editar
        </Button>
        </div>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <ul style={{textAlign:'left'}}>
                <li><h3>Média de produção</h3></li>
            </ul>
            <ul style={{textAlign:'center'}}>
                <li><h3>7 L/dia</h3></li>
            </ul>
        </div>
        <Divider/>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <ul style={{textAlign:'left'}}>
                <li><h3>Nascimento</h3></li>
            </ul>
            <ul>
                <li><h3>13/07/2001</h3></li>
            </ul>
        </div>
        <Divider/>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <ul style={{textAlign:'left'}}>
                <li><h3>Nº de crias</h3></li>
            </ul>
            <ul>
                <li><h3>2</h3></li>
            </ul>
        </div>
        <Divider/>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <ul style={{textAlign:'left'}}>
                <li><h3>Parto estimado</h3></li>
            </ul>
            <ul>
                <li><h3>30/10</h3></li>
            </ul>
        </div>
        <Divider/>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <ul style={{textAlign:'left'}}>
                <li><h3>Peso</h3></li>
            </ul>
            <ul>
                <li><h3>324 Kg</h3></li>
            </ul>
        </div>
        <Divider/>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <ul style={{textAlign:'left'}}>
                <li><h3>Pelagem</h3></li>
            </ul>
            <ul>
                <li><h3>Branca</h3></li>
            </ul>
        </div>
        <Divider/>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <ul style={{textAlign:'left'}}>
                <li><h3>Raça</h3></li>
            </ul>
            <ul>
                <li><h3>Girolando</h3></li>
            </ul>
        </div>
        <Divider/>
    </Container>
    );
}

export default Tela_info_vaca;