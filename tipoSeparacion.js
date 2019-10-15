import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const ranges = [
    {
      value: 'Manual',
      label: 'Manual',
    },
    {
      value: 'Mecanico',
      label: 'Mecanico',
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

export default function TipoSeparacion() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    rangoSeparacion: '',
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
          label="Tipo de Separacion"
          value={values.rangoSeparacion}
          onChange={handleChange('rangoSeparacion')}
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