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

export default function DataMobiliarioMateriales() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    cantidad: '',
    precio: '',
    moneda: '',
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
            InputLabelProps={{
                shrink: true,
            }}
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
          label="Moneda"
          value={values.moneda}
          onChange={handleChange('moneda')}
          disabled={true}
        />
    </div>
  );
}