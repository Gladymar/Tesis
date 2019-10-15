import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const ranges = [
  {
    value: 'Venezuela',
    label: 'Venezuela',
  },
  {
    value: 'Panama',
    label: 'Panama',
  },
  {
    value: 'Brasil',
    label: 'Brasil',
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
    flexBasis: 350,
  },
}));

export default function Planta() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    rangoPais: '',
    rangoEstado: '',
    rangoMunicipio: '',
    rangoCiudad: '',
    ubicacion: '',
    area: '',
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
          label="Pais"
          value={values.rangoPais}
          onChange={handleChange('rangoPais')}
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Estado"
          value={values.rangoEstado}
          onChange={handleChange('rangoEstado')}
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Municipio"
          value={values.rangoMunicipio}
          onChange={handleChange('rangoMunicipio')}
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Ciudad"
          value={values.rangoCiudad}
          onChange={handleChange('rangoCiudad')}
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
          label="Ubicacion Exacta"
          value={values.ubicacion}
          onChange={handleChange('ubicacion')}
        />
        <TextField
          id="outlined-adornment-weight"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Area del terreno"
          value={values.area}
          onChange={handleChange('area')}
        />
    </div>
  );
}