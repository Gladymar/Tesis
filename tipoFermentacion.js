import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const ranges = [
    {
      value: 'Hilera',
      label: 'Hilera',
    },
    {
      value: 'Pila Estatica Aireada',
      label: 'Pila Estatica Aireada',
    },
    {
      value: 'Tambor',
      label: 'Tambor',
    },
    {
      value: 'Tunel',
      label: 'Tunel',
    },
];

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

export default function TipoFermentacion() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    rangoFermentacion: '',
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className={classes.root}>
    <TextField
          select
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Tipo de Fermentacion"
          value={values.rangoFermentacion}
          onChange={handleChange('rangoFermentacion')}
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    </div>
  );
}