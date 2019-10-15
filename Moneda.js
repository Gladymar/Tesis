import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const ranges = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

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

export default function Moneda() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    pais: '',
    rangoMoneda: '',
    factor: '',
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
          label="Pais"
          value={values.pais}
          onChange={handleChange('pais')}
          disabled={true}
        />  
        <TextField
          select
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Moneda"
          value={values.rangoMoneda}
          onChange={handleChange('rangoMoneda')}
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-adornment-weight"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Factor de Conversion a USD"
          value={values.factor}
          onChange={handleChange('factor')}
        />
    </div>
  );
}