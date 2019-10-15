import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import principal from './../imagenes/principal.png';
import NivelLocalizacion from './nivelLocalizacion';
import NivelInversiones from './nivelInversiones';
import NivelEvaluaciones from './nivelEvaluaciones';
import NivelFactibilidad from './nivelFactibilidad';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    alignItems: 'center',
  },
}));

export default function Menu() {
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
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Inicio" icon={<HomeIcon />} {...a11yProps(0)} />
          <Tab label="Localizacion" icon={<LocationOnIcon />} {...a11yProps(1)} />
          <Tab label="Inversiones" icon={<MonetizationOnIcon />} {...a11yProps(2)} />
          <Tab label="Evaluaciones" icon={<SettingsEthernetIcon />} {...a11yProps(3)} />
          <Tab label="Factibilidad" icon={<TrendingUpIcon />} {...a11yProps(4)} />
          <Tab label="Configuracion" icon={<SettingsIcon />} {...a11yProps(5)} />
          <Tab label="Ayuda" icon={<HelpIcon />} {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      
      <TabPanel value={value} index={0}>
        <img className="principalIcon" src={principal} alt=""></img>  
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NivelLocalizacion></NivelLocalizacion>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <NivelInversiones></NivelInversiones>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <NivelEvaluaciones></NivelEvaluaciones>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <NivelFactibilidad></NivelFactibilidad>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Typography color="primary" variant="h2">INFORMACION</Typography>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Typography color="primary" variant="h2">INFORMACION</Typography>
      </TabPanel>
    </div>
  );
}
