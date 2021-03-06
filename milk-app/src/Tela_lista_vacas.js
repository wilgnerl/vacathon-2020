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
    marginTop: '4.5rem',
    height: '5vh',
    fontWeight: "bolder",
    fontSize: '10px',
    alignSelf: 'left'
  }
}));

export default function Tela_lista_vacas() {
  const classes = useStyles();

  return (
    <Container>
        <Header></Header>
        <div style={{display:'flex', flexDirection:'row'}}>
        <Link_Router to="/tela_vacas_2">
            <Button
              className={classes.botao_voltar}
              type="submit"
              variant="contained"
              color="primary"
              >
                Voltar
            </Button>
        </Link_Router>
        <h2 style={{marginTop:'4.5rem', marginLeft:'2rem', marginBottom:'1rem'}}>Lista de Vacas</h2>
        </div>
        <Divider component='hr'/>
        <div style={{display:"flex", flexDirection:"row"}}>
        <TextField 
                variant="outlined"
                margin="normal"
                id="numero_vaca"
                label="Buscar pelo número "
                name="litros"
                autoFocus
                size= 'large'
                marginTop='1'
                marginRigth='1'
                />
        <Button
            className={classes.botao}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{width: "8rem",
                    fontWeight: 'bolder',
                    margin:"1rem"}}
            >
              Buscar
        </Button>
        </div>
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
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/676/676208.svg" variant='square' />
            </ListItemAvatar>
            <ListItemText
            primary="Número: 003"
            secondary={
                <React.Fragment>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Estado: Lactação vazia
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/676/676208.svg" variant='square' />
            </ListItemAvatar>
            <ListItemText
            primary="Número: 083"
            secondary={
                <React.Fragment>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Estado: Bezerro
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/676/676208.svg" variant='square' />
            </ListItemAvatar>
            <ListItemText
            primary="Número: 043"
            secondary={
                <React.Fragment>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Estado: Lactação prenhe
                </Typography>
                {}
                </React.Fragment>
            }
            />
        
        </ListItem>
        <Divider variant="inset" component="li" />
        <Link_Router component='a' to='./tela_info_vaca'>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/676/676208.svg" variant='square' />
            </ListItemAvatar>
            <ListItemText
            primary="Número: 032"
            secondary={
                <React.Fragment>
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
        </Link_Router>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/676/676208.svg" variant='square' />
            </ListItemAvatar>
            <ListItemText
            primary="Número: 057"
            secondary={
                <React.Fragment>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Estado: Lactação vazia
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/676/676208.svg" variant='square' />
            </ListItemAvatar>
            <ListItemText
            primary="Número: 017"
            secondary={
                <React.Fragment>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Estado: Lactação prenhe
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/676/676208.svg" variant='square' />
            </ListItemAvatar>
            <ListItemText
            primary="Número: 062"
            secondary={
                <React.Fragment>
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
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/676/676208.svg" variant='square' />
            </ListItemAvatar>
            <ListItemText
            primary="Número: 096"
            secondary={
                <React.Fragment>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Estado: Bezerro
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/676/676208.svg" variant='square' />
            </ListItemAvatar>
            <ListItemText
            primary="Número: 071"
            secondary={
                <React.Fragment>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Estado: Seca
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/676/676208.svg" variant='square' />
            </ListItemAvatar>
            <ListItemText
            primary="Número: 065"
            secondary={
                <React.Fragment>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Estado: Lactação vazia
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/676/676208.svg" variant='square' />
            </ListItemAvatar>
            <ListItemText
            primary="Número: 048"
            secondary={
                <React.Fragment>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Estado: Lactação vazia
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/676/676208.svg" variant='square' />
            </ListItemAvatar>
            <ListItemText
            primary="Número: 087"
            secondary={
                <React.Fragment>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Estado: Bezerro
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <Divider variant="inset" component="li" />
        </List>
    </Container>
  );
}
