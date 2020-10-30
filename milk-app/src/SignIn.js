import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ReactComponent as Logo } from './logo.svg';
import { Link as Link_Router} from "react-router-dom";

function logo() {
  return (
    <div>
      {/* Logo is an actual React component */}
      <Logo />
        {/* Icons made by <a href="https://www.flaticon.com/authors/freepik"
        title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"
        title="Flaticon"> www.flaticon.com</a> */}
    </div>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Direitos reservados © '}
      <Link color="inherit" href="https://material-ui.com/">
        Nosso Leite
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logo: {
    width: '60%',
    marginTop:'2rem'
  }
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        { <Logo className={classes.logo}>
          <Logo />
        </Logo> }
        {/* { <Avatar className={classes.avatar}>
          <Logo />
          <LockOutlinedIcon />
        </Avatar> } */}
        {/* <Typography component="h1" variant="h5">
          Entrar
        </Typography> */}
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Endereço de Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Lembre-me"
          />
          <Link_Router to="/tela_leite_1">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Entrar
            </Button>
          </Link_Router>
          <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', margin:'0'}}>
            <p>Esqueceu a senha?</p>
            <p>Cadastrar-se? </p>
          </div>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

