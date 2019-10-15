import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    margin: {
        margin: theme.spacing(1),
    },
    textField: {
        flexBasis: 200,
    },
    fab: {
      margin: theme.spacing(1),
    },
}));

export default function DataMaquinaria() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    cantidad: '',
    precio: '',
    capacidad: '',
    vidaUtil: '',
    valorSalvamento: '',
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className={classes.root}>
        <TextField
            id="standard-number"
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            label="Cantidad"
            value={values.cantidad}
            onChange={handleChange('cantidad')}
            type="number"
            margin="normal"
        /> 
        <TextField
          id="outlined-adornment-weight"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Precio"
          value={values.precio}
          onChange={handleChange('precio')}
          disabled={true}
        />
        <TextField
          id="outlined-adornment-weight"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Capacidad"
          value={values.capacidad}
          onChange={handleChange('capacidad')}
          disabled={true}
        />
        <TextField
          id="outlined-adornment-weight"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Vida Util"
          value={values.vidaUtil}
          onChange={handleChange('vidaUtil')}
          disabled={true}
        />
        <TextField
          id="outlined-adornment-weight"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Valor de Salvamento"
          value={values.valorSalvamento}
          onChange={handleChange('valorSalvamento')}
          disabled={true}
        />
    </div>
  );
}