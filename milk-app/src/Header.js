import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Link as Link_Router} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
  
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
      
    },
    alignItems:'center'
  },
  
}))(MenuItem);


const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    display:'flex',
    alignItems:'center',
  },
   
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <AppBar  style={{backgroundColor:'#73b2d9'}}>
        <Toolbar>
          
        <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
        style={{display:'flex',
                justifyContent:'center',
              alignItems:'center',backgroundColor:'#73b2d9',
          width:'100%', fontWeight:'bold', fontSize:'18px'}}
      >
        Módulos
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        //keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <Link_Router to="/tela_leite_1">
          <ListItemText primary="Leite" />
          </Link_Router>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link_Router to="/tela_vacas_1">
          <ListItemText primary="Vacas" />
          </Link_Router>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link_Router to="/tela_financeiro">
          <ListItemText primary="Financeiro" />
          </Link_Router>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Reprodução" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Educação" />
        </StyledMenuItem>
      </StyledMenu>
          
          
        </Toolbar>
      </AppBar>
    </div>
  );
}