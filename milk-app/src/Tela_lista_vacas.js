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

export default function Tela_lista_vacas() {
  const classes = useStyles();

  return (
    <Container>
        <div style={{display:"flex", flexDirection:"row"}}>
        <TextField 
                variant="outlined"
                margin="normal"
                id="numero_vaca"
                label="Buscar pelo número "
                name="litros"
                autoFocus
                size= 'large'
                marginTop='2'
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
                    Estado: Lactação
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
                    Estado: Lactação
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
                    Estado: Lactação
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
                    Estado: Lactação
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
                    Estado: Entrepartos
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
                    Estado: Lactação
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
                    Estado: Lactação
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
