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

export default function Amortizacion() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    anioGracia: '',
    tasaInteres: '',
    Plazo: '',
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
          label="Años de Gracia"
          value={values.anioGracia}
          onChange={handleChange('anioGracia')}
        />  
        <TextField
          id="outlined-adornment-weight"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Tasa de Interes (%)"
          value={values.tasaInteres}
          onChange={handleChange('tasaInteres')}
        />
        <TextField
          id="outlined-adornment-weight"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Plazo"
          value={values.plazo}
          onChange={handleChange('plazo')}
        />
    </div>
  );
}