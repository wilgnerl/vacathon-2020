import React from 'react';
import {Button, Divider} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Icon from './avanco-rapido (1).png'
import { Link as Link_Router} from "react-router-dom";
import { Container } from '@material-ui/core';
import Header from './Header'

const useStyles = makeStyles((theme ) => ({
        root: {
            
        },
        texto: {
            textAlign: 'center',
        },
        texto2: {
            textAlign: 'center',
        },

        info: {
            fontSize: 30,
            textAlign: 'center',
        },
        botao: {
            height: '8vh',
            fontWeight: "bolder",
            fontSize: '15px',
            alignSelf: 'flex-end',
            marginBottom: '1rem'
          },
    })
);

export default function Text(theme) {
    const classes = useStyles();
  
    return (
      <Container>
      <Header></Header>
      <h1 style={{marginTop:'4rem'}}>Informações sobre o seu leite</h1>
      <div className={classes.root}>
        <h2 className={classes.texto} >Produção de hoje:</h2>
        <p className={classes.info} >20 Litros</p>

        <h2 className={classes.texto2} >Armazenamento:</h2>
        <p className={classes.info} >217 Litros</p>
        <div className={classes.botao}>
            <Link_Router to="/tela_evento_leite">
            <Button
              className={classes.botao}
              type="submit"
              variant="contained"
              color="primary"
              >
                Cadastrar evento
            </Button>
            </Link_Router>
        </div>
        <Divider></Divider>
        <div className='status' style={{borderStyle:'solid',
                                        borderColor: '#FFFFFF',
                                         marginLeft:8,
                                          marginRight:8,

                                           marginBottom:15,
                                                                                   
                                           }}>

            <h4 style={{display:'flex', justifyContent:'center'}}>
                Vacas com problemas:
            </h4>
            <div className='infovaca' style={{display:'flex',
                                              justifyContent:'space-around'}}>
                <img src='https://www.flaticon.com/svg/static/icons/svg/676/676208.svg' style={{marginBottom:'0.8rem', width:'50px', height:'50px'}}/>
                <p>Vaca 32</p>
                <img src={Icon} style={{width:'50px', height:'50px'}}/>
            </div>
            <div className='infovaca' style={{display:'flex',
                                              justifyContent:'space-around'}}>
                <img src='https://www.flaticon.com/svg/static/icons/svg/676/676208.svg' style={{marginBottom:'0.8rem', width:'50px', height:'50px'}}/>
                <p>Vaca 27</p>
                <img src={Icon} style={{width:'50px', height:'50px'}}/>
            </div>
        </div>
      </div>
      </Container>
    );
}