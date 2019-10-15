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

export default function Cliente() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    nombre: '',
    apellido: '',
    representante: '',
    rangoPais: '',
    rangoEstado: '',
    rangoCiudad: '',
    telefono: '',
    correo: '',
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
          label="Nombre"
          value={values.nombre}
          onChange={handleChange('nombre')}
        />
        <TextField
          id="outlined-adornment-weight"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Apellido"
          value={values.apellido}
          onChange={handleChange('apellido')}
        />
        <TextField
          id="outlined-adornment-weight"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Representante"
          value={values.representante}
          onChange={handleChange('representante')}
      />  
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
          label="Telefono"
          value={values.telefono}
          onChange={handleChange('telefono')}
        />
        <TextField
          id="outlined-adornment-weight"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Correo"
          value={values.correo}
          onChange={handleChange('correo')}
        />
    </div>
  );
}