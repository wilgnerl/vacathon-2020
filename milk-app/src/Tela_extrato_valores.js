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
    marginTop: '0rem',
    height: '5vh',
    fontWeight: "bolder",
    fontSize: '10px',
    alignSelf: 'left'
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
      <Header/>
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
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value={1}>Janeiro</MenuItem>
            <MenuItem value={2}>Fevereiro</MenuItem>
            <MenuItem value=''>Março</MenuItem>
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
        <div style={{display:"flex", flexDirection:'row'}}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/809/809194.svg" variant='square'/>
            </ListItemAvatar>
            <ListItemText
            alignItems='center'
            primary="Conta de telefone"
            secondary={
                <React.Fragment className={classes.aumentar}>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Data: 30/03/2020
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <h2 style={{color:'#FF3A20'}}>-78,18</h2>
        </div>
        <Divider variant="inset" component="li" />
        <div style={{display:"flex", flexDirection:'row'}}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/926/926427.svg" variant='square'/>
            </ListItemAvatar>
            <ListItemText
            alignItems='center'
            primary="Conta de internet"
            secondary={
                <React.Fragment className={classes.aumentar}>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Data: 29/03/2020
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <h2 style={{color:'#FF3A20'}}>-65,92</h2>
        </div>
        <Divider variant="inset" component="li" />
        <div style={{display:"flex", flexDirection:'row'}}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/2720/2720009.svg" variant='square'/>
            </ListItemAvatar>
            <ListItemText
            alignItems='center'
            primary="Venda de adubo"
            secondary={
                <React.Fragment className={classes.aumentar}>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Data: 01/03/2020
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <h2 style={{color:'#29BF12'}}>+231,73</h2>
        </div>
        <Divider variant="inset" component="li" />
        <div style={{display:"flex", flexDirection:'row'}}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/2913/2913380.svg" variant='square'/>
            </ListItemAvatar>
            <ListItemText
            alignItems='center'
            primary="Veterinário"
            secondary={
                <React.Fragment className={classes.aumentar}>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Data: 27/03/2020
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <h2 style={{color:'#FF3A20'}}>-298,23</h2>
        </div>
        <Divider variant="inset" component="li" />
        <div style={{display:"flex", flexDirection:'row'}}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/2913/2913433.svg" variant='square'/>
            </ListItemAvatar>
            <ListItemText
            alignItems='center'
            primary="Ração vacas"
            secondary={
                <React.Fragment className={classes.aumentar}>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Data: 23/03/2020
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <h2 style={{color:'#FF3A20'}}>-345,25</h2>
        </div>
        <Divider variant="inset" component="li" />
        <div style={{display:"flex", flexDirection:'row'}}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/981/981404.svg" variant='square'/>
            </ListItemAvatar>
            <ListItemText
            alignItems='center'
            primary="Conta de Luz"
            secondary={
                <React.Fragment className={classes.aumentar}>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Data: 17/03/2020
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <h2 style={{color:'#FF3A20'}}>-659,42</h2>
        </div>
        <Divider variant="inset" component="li" />
        <div style={{display:"flex", flexDirection:'row'}}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/72/72167.svg" variant='square'/>
            </ListItemAvatar>
            <ListItemText
            alignItems='center'
            primary="Venda de leite"
            secondary={
                <React.Fragment className={classes.aumentar}>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Data: 15/03/2020
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <h2 style={{color:'#29BF12'}}>+3.729,76</h2>
        </div>
        <Divider variant="inset" component="li" />
        <div style={{display:"flex", flexDirection:'row'}}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/517/517491.svg" variant='square'/>
            </ListItemAvatar>
            <ListItemText
            alignItems='center'
            primary="Salário João"
            secondary={
                <React.Fragment className={classes.aumentar}>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Data: 12/03/2020
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <h2 style={{color:'#FF3A20'}}>-872,29</h2>
        </div>
        <Divider variant="inset" component="li" />
        <div style={{display:"flex", flexDirection:'row'}}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/3238/3238483.svg" variant='square'/>
            </ListItemAvatar>
            <ListItemText
            alignItems='center'
            primary="Conta de água"
            secondary={
                <React.Fragment className={classes.aumentar}>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Data: 07/03/2020
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <h2 style={{color:'#FF3A20'}}>-193,04</h2>
        </div>
        <Divider variant="inset" component="li" />
        <div style={{display:"flex", flexDirection:'row'}}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/676/676208.svg" variant='square'/>
            </ListItemAvatar>
            <ListItemText
            alignItems='center'
            primary="Venda de novilho"
            secondary={
                <React.Fragment className={classes.aumentar}>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Data: 07/03/2020
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <h2 style={{color:'#29BF12'}}>+800,00</h2>
        </div>
        <Divider variant="inset" component="li" />
        <div style={{display:"flex", flexDirection:'row'}}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/2289/2289430.svg" variant='square'/>
            </ListItemAvatar>
            <ListItemText
            alignItems='center'
            primary="Combustível trator"
            secondary={
                <React.Fragment className={classes.aumentar}>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Data: 05/03/2020
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <h2 style={{color:'#FF3A20'}}>-382,72</h2>
        </div>
        <Divider variant="inset" component="li" />
        <div style={{display:"flex", flexDirection:'row'}}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/2084/2084283.svg" variant='square'/>
            </ListItemAvatar>
            <ListItemText
            alignItems='center'
            primary="Peças trator"
            secondary={
                <React.Fragment className={classes.aumentar}>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Data: 02/03/2020
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <h2 style={{color:'#FF3A20'}}>-129,65</h2>
        </div>
        <Divider variant="inset" component="li" />
        <div style={{display:"flex", flexDirection:'row'}}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/2913/2913380.svg" variant='square'/>
            </ListItemAvatar>
            <ListItemText
            alignItems='center'
            primary="Veterinário"
            secondary={
                <React.Fragment className={classes.aumentar}>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Data: 01/03/2020
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <h2 style={{color:'#FF3A20'}}>-349,57</h2>
        </div>
        <Divider variant="inset" component="li" />
        <div style={{display:"flex", flexDirection:'row'}}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/2720/2720009.svg" variant='square'/>
            </ListItemAvatar>
            <ListItemText
            alignItems='center'
            primary="Venda de adubo"
            secondary={
                <React.Fragment className={classes.aumentar}>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Data: 01/03/2020
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <h2 style={{color:'#29BF12'}}>+129,57</h2>
        </div>
        <Divider variant="inset" component="li" />
        <div style={{display:"flex", flexDirection:'row'}}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/72/72167.svg" variant='square'/>
            </ListItemAvatar>
            <ListItemText
            alignItems='center'
            primary="Venda de leite"
            secondary={
                <React.Fragment className={classes.aumentar}>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Data: 01/03/2020
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <h2 style={{color:'#29BF12'}}>+2.729,57</h2>
        </div>
        <Divider variant="inset" component="li" />
        <div style={{display:"flex", flexDirection:'row'}}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/2913/2913433.svg" variant='square'/>
            </ListItemAvatar>
            <ListItemText
            alignItems='center'
            primary="Ração vacas"
            secondary={
                <React.Fragment className={classes.aumentar}>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Data: 01/03/2020
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <h2 style={{color:'#FF3A20'}}>-431,70</h2>
        </div>
        <Divider variant="inset" component="li" />
        <div style={{display:"flex", flexDirection:'row'}}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/2746/2746450.svg" variant='square'/>
            </ListItemAvatar>
            <ListItemText
            alignItems='center'
            primary="Vermífugo"
            secondary={
                <React.Fragment className={classes.aumentar}>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Data: 01/03/2020
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <h2 style={{color:'#FF3A20'}}>-284,66</h2>
        </div>
        <Divider variant="inset" component="li" />
        <div style={{display:"flex", flexDirection:'row'}}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/517/517491.svg" variant='square'/>
            </ListItemAvatar>
            <ListItemText
            alignItems='center'
            primary="Salário Antônio"
            secondary={
                <React.Fragment className={classes.aumentar}>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Data: 01/03/2020
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <h2 style={{color:'#FF3A20'}}>-959,35</h2>
        </div>
        <Divider variant="inset" component="li" />
        <div style={{display:"flex", flexDirection:'row'}}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/517/517491.svg" variant='square'/>
            </ListItemAvatar>
            <ListItemText
            alignItems='center'
            primary="Salário Augusto"
            secondary={
                <React.Fragment className={classes.aumentar}>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    Data: 01/03/2020
                </Typography>
                {}
                </React.Fragment>
            }
            />
        </ListItem>
        <h2 style={{color:'#FF3A20'}}>-1103,49</h2>
        </div>
        <Divider variant="inset" component="li" />
      </List>
    );
}
