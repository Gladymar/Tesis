import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Fab from '@material-ui/core/Fab';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import BusinessIcon from '@material-ui/icons/Business';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Check from '@material-ui/icons/Check';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SaveIcon from '@material-ui/icons/Save';
import StepConnector from '@material-ui/core/StepConnector';
import Typography from '@material-ui/core/Typography';
import Cliente from './Cliente';
import Planta from './Planta';
import Moneda from './Moneda';
import cliente from './../imagenes/cliente.png';
import planta from './../imagenes/planta.jpg';
import moneda from './../imagenes/moneda.png';
import './estilos.css';

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {

    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(56, 52, 164) 0%,rgb(54, 50, 162) 50%,rgb(52, 50, 160) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:'',    
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 95deg,rgb(56, 52, 164) 0%,rgb(54, 50, 162) 50%,rgb(54, 50, 160) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <AssignmentIndIcon />,
    2: <BusinessIcon />,
    3: <AttachMoneyIcon />,
    4: <Check />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Cliente', 'Planta', 'Moneda', ' '];
}

function getStepContent(step) {
  switch (step) {
    case 1:
      return(
        <div className="imgCliente">
          <Cliente></Cliente>
          <img className="clienteIcon" src={cliente} alt=""></img>
        </div>
      );
    case 2:
      return(
        <div className="imgPlanta">
          <Planta></Planta>
          <img className="plantaIcon" src={planta} alt=""></img>
        </div>
      );
    case 3:
      return(
        <div className="imgMoneda">
          <Moneda></Moneda>
          <img className="monedaIcon" src={moneda} alt=""></img>
        </div>
      );
    case 4:
      return " ";
    default:
      return "PASO DESCONOCIDO";
  }
}

export default function NivelLocalizacion() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSave = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    console.log("Guardado con Exito");
  };

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography color="primary">Ha completado todos los pasos</Typography>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div>
              <Fab color="primary" className={classes.fab}>
                <ArrowBackIosIcon onClick={handleBack}></ArrowBackIosIcon>
              </Fab>
              <Fab color="primary" className={classes.fab}>
                {activeStep === steps.length - 1 ? <SaveIcon onClick={handleSave} /> : <ArrowForwardIosIcon onClick={handleNext} />}
              </Fab>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}