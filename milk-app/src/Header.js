import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
  
  title: {
    flexGrow: 1,
    
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar  style={{backgroundColor:'#73B2D9'}}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h5" align='center'>
            Nosso Leite
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}