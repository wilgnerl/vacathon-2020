import React from 'react';
import { Button, Container } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link as Link_Router} from "react-router-dom";


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
    <Container>
      <div className={classes.root}>
        
        <form className={classes.root} noValidate autoComplete="off">
            
        <TextField 
            className={classes.texto}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="numero_vaca"
            label="Número do brinco "
            name="brinco"
            autoFocus />
            <TextField id="outlined-basic" label="Nascimento" variant="outlined" />
            <TextField id="outlined-basic" label="Raça" variant="outlined" />
            <TextField id="outlined-basic" label="Estado" variant="outlined" />
            <TextField id="outlined-basic" label="Peso" variant="outlined" />

            <Button
            variant="contained" style={{backgroundColor:'#C2E0F2', width:300, fontWeight:'bold', padding:'1rem'}} disableElevation size='large' fullwidht='True'>Adicionar</Button>
        </form>
     </div>
     </Container>
    );
}