import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Fab from '@material-ui/core/Fab';
import Check from '@material-ui/icons/Check';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SaveIcon from '@material-ui/icons/Save';
import StepConnector from '@material-ui/core/StepConnector';
import { Typography } from '@material-ui/core';
import ListaMaquinaria from './listaMaquinaria';
import TipoSeparacion from './tipoSeparacion';
import TipoFermentacion from './tipoFermentacion';
import './estilos.css';

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#eaeaf0',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#3834A4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 1,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#eaeaf0',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#3834A4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
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
  return ['Recepcion', 'Separacion', 'Fermentacion de la Composta', 'Comercializacion', 'Traslado Interno', ' '];
}

function getStepContent(step) {
  switch (step) {
    case 1:
      return (
        <div>
          <div className="data">
            <Typography color="primary">Balanza de Entrada</Typography>
          </div>
          <ListaMaquinaria left={['Bince','Yingheng']} />
          <div className="data">
            <Typography color="primary">Balanza de Salida</Typography>
          </div>
          <ListaMaquinaria left={['Tavol','Danko Scale']} />
          <div className="data">
            <Typography color="primary">Pala Mecanica</Typography>
          </div>
          <ListaMaquinaria left={['Shandong','Evangel', 'XJN']} />
        </div> 
      );
    case 2: 
      return (
        <div>
          <TipoSeparacion />
          <div className="data">
            <Typography color="primary">Cinta Transportadora</Typography>
          </div>
          <ListaMaquinaria left={['DY','Best Quality', 'Xinlong']} />
          <div className="data">
            <Typography color="primary">Cinta Transportadora</Typography>
          </div>
          <ListaMaquinaria left={['DY','Best Quality', 'Xinlong']} />
          <div className="data">
            <Typography color="primary">Abre Bolsas</Typography>
          </div>
          <ListaMaquinaria left={['APR 200','AS 8']} />
          <div className="data">
            <Typography color="primary">Separacion Magnetica</Typography>
          </div>
          <ListaMaquinaria left={['CHNMAG','GUOTE']}/>
          <div className="data">
            <Typography color="primary">Trommel</Typography>
          </div>
          <ListaMaquinaria left={['HSM','Jinma']} />
          <div className="data">
            <Typography color="primary">Trommel/Afino</Typography>
          </div>
          <ListaMaquinaria left={['Tongda','TD']} />
        </div> 
      );
    case 3: 
      return (
        <div>
          <TipoFermentacion />
          <div className="data">
            <Typography color="primary">Volteadora</Typography>
          </div>
          <ListaMaquinaria left={['TG 231','SGF 3100']} />
          <div className="data">
            <Typography color="primary">Pila</Typography>
          </div>
          <ListaMaquinaria left={['Tuberias','Ventilador']} />
          <div className="data">
            <Typography color="primary">Tambor</Typography>
          </div>
          <ListaMaquinaria left={['Tinanci','Hengchang', 'Sinoway']} />
          <div className="data">
            <Typography color="primary">Tunel</Typography>
          </div>
          <ListaMaquinaria left={['Pequeño (2x2x6)m','Mediano (4x5x14)m', 'Grande (6x7x16)m']} />
        </div> 
      );
    case 4:
      return (
        <div>
          <div className="data">
            <Typography color="primary">Metales - Prensa</Typography>
          </div>
          <ListaMaquinaria left={['JOCONN','YJ-80']} />
          <div className="data">
            <Typography color="primary">Papel y Carton - Prensa</Typography>
          </div>
          <ListaMaquinaria left={['JOCONN','YJ-80']} />
          <div className="data">
            <Typography color="primary">Plastico - Prensa</Typography>
          </div>
          <ListaMaquinaria left={['JOCONN','YJ-80']} />
          <div className="data">
            <Typography color="primary">Plastico - Lavadora</Typography>
          </div>
          <ListaMaquinaria left={['HG','TOPP']} />
          <div className="data">
            <Typography color="primary">Vidrio - Lavadora</Typography>
          </div>
          <ListaMaquinaria left={['HG','TOPP']} />
          <div className="data">
            <Typography color="primary">Vidrio - Caja de Transporte</Typography>
          </div>
          <ListaMaquinaria left={['Carton','Plastico']} />
          <div className="data">
            <Typography color="primary">Composta - Saco</Typography>
          </div>
          <ListaMaquinaria left={['OEM','PP']} />
        </div> 
      );
    case 5:
      return (
        <div>
          <div className="data">
            <Typography color="primary">Cinta Transportadora</Typography>
          </div>
          <ListaMaquinaria left={['DY','Best Quality', 'Xinlong']} />
          <div className="data">
            <Typography color="primary">Pala Mecanica</Typography>
          </div>
          <ListaMaquinaria left={['Shandong','Evangel', 'XJN']} />
        </div> 
      );
    case 6:
      return "";
    default:
      return "PASO DESCONOCIDO";
  }
}

export default function Maquinaria() {
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
      <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
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