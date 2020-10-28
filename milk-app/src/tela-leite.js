import React from 'react';

import Button from '@material-ui/core/Button';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Cow from './cow.png';
import Icon from './avanco-rapido (1).png'

const useStyles = makeStyles((theme ) => ({
        root: {
            
        },
        texto: {
            marginBottom: 10,
            fontSize: 35,
            textAlign: 'center',
        },
        texto2: {
            marginBottom: 10,
            fontSize: 35,
            textAlign: 'center',
        },

        info: {
            fontSize: 30,
            textAlign: 'center',
        },
        botao: {
            marginTop: 40,
            display: 'flex',

            alignItems: 'center',
            justifyContent: 'center',
        },
        
                
    })
);

export default function Text(theme) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <h6 className={classes.texto} >Produção de hoje:</h6>
        <p className={classes.info} >20 Litros</p>

        <h6 className={classes.texto2} >Armazenamento:</h6>
        <p className={classes.info} >217 Litros</p>
        <div className={classes.botao}>
            <Button variant="contained" style={{backgroundColor:'#C2E0F2', width:300, fontWeight:'bold', padding:'1rem'}} disableElevation size='large' fullwidht='True'>
                Cadastrar
            </Button>
        </div>
        <div className='status' style={{borderStyle:'solid',
                                         marginLeft:8,
                                          marginRight:8,
                                           marginTop:10,
                                                                                   
                                           }}>

            <h4 style={{display:'flex', justifyContent:'center'}}>
                Mimosas com problemas
            </h4>
            <div className='infovaca' style={{display:'flex',
                                              justifyContent:'space-around'}}>
                <img src={Cow}/>
                <p>Mimosa 27</p>
                <img src={Icon}/>
            </div>
            


        </div>
        


        
      </div>
    );
}