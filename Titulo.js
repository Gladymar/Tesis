import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Titulo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense" padding-left="0" padding-rigth="0">
          <Typography variant="h5" color="inherit">
            Sistema de Soporte a la Evaluacion de Proyectos para el Reciclaje de Desechos Solidos
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}