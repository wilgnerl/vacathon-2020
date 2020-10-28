import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme ) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '36ch',
                
        },
        marginTop:100,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',

                
    }}));

export default function Text(theme) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        
        <form className={classes.root} noValidate autoComplete="off">
            
            <TextField id="outlined-basic" label="Numero do Brinco" variant="outlined" />
            <TextField id="outlined-basic" label="Nascimento" variant="outlined" />
            <TextField id="outlined-basic" label="Raça" variant="outlined" />
            <TextField id="outlined-basic" label="Estado" variant="outlined" />
            <TextField id="outlined-basic" label="Peso" variant="outlined" />

            <Button
            variant="contained" style={{backgroundColor:'#C2E0F2', width:300, fontWeight:'bold', padding:'1rem'}} disableElevation size='large' fullwidht='True'>Adicionar</Button>
        </form> 


     </div>
        



    );
}