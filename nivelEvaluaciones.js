import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TablaInversionInicial from './tablaInversionInicial';
import Capital from './Capital';
import FinanciamientoRequerido from './financiamientoRequerido';
import PrecioVenta from './precioVenta';
import Amortizacion from './Amortizacion';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NivelEvaluaciones() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Inversion Inicial" {...a11yProps(0)} />
          <Tab label="Capital" {...a11yProps(1)} />
          <Tab label="Precio de Venta" {...a11yProps(2)} />
          <Tab label="Costos Fijos y Variables" {...a11yProps(3)} />
          <Tab label="Proyeccion de Ingresos y Egresos" {...a11yProps(4)} />
          <Tab label="Depreciacion" {...a11yProps(5)} />
          <Tab label="Amortizacion" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TablaInversionInicial></TablaInversionInicial>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="data">
            <Typography color="primary">Capital Propio</Typography>
        </div>
        <Capital></Capital>
        <div className="data">
            <Typography color="primary">Financiamiento Requerido</Typography>
        </div>
        <FinanciamientoRequerido></FinanciamientoRequerido>
        <div className="data">
            <Typography color="primary">Banca Privada</Typography>
        </div>
        <Capital></Capital>
        <div className="data">
            <Typography color="primary">Organismos Multilaterales</Typography>
        </div>
        <Capital></Capital>
      </TabPanel>
      <TabPanel value={value} index={2}>
          <PrecioVenta></PrecioVenta>
          <Typography color="primary" variant="h2">TABLA</Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography color="primary" variant="h2">TABLA</Typography>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Typography color="primary" variant="h2">TABLA</Typography>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Typography color="primary" variant="h2">TABLA</Typography>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <div className="data">
            <Typography color="primary">Banca Privada</Typography>
        </div>
        <Amortizacion></Amortizacion>
        <div className="data">
            <Typography color="primary">Organismos Multilaterales</Typography>
        </div>
        <Amortizacion></Amortizacion>
        <Typography color="primary" variant="h2">TABLA</Typography>
      </TabPanel>
    </div>
  );
}
