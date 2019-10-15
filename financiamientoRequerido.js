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

export default function FinanciamientoRequerido() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    inversion: '',
    moneda: '',
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
          label="Inversion"
          value={values.inversion}
          onChange={handleChange('inversion')}
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