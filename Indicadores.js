import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    flexBasis: 300,
  },
}));

export default function Indicadores() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    premioRiesgo: '',
    tasaInflacion: '',
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className={classes.root}>  
        <TextField
          id="outlined-adornment-weight"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Premio al Riesgo"
          value={values.premioRiesgo}
          onChange={handleChange('premioRiesgo')}
        />  
        <TextField
          id="outlined-adornment-weight"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Tasa de Inflacion (%)"
          value={values.tasaInflacion}
          onChange={handleChange('tasaInflacion')}
        />
    </div>
  );
}