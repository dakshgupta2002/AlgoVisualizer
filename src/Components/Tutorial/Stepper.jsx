import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material';

import asset1 from '../../Assets/asset1.png'
import Legend from './Legend';
import Contact from './Contact';

const steps = [
  {
    label: 'ALGO VISUALIZER',
    description: `Pathfinding algorithms are a series of steps which can find the shortest path 
                  between a starting point and an ending point.
                  With Algo Visualizer you can clearly see the pathfinding algorithm in action
                  as you like and how you like.`,
  },
  {
    label: 'HOW TO USE IT?',
    description:
      `This is the easiest and the most interactive way to use Algo Visualizer.
      To set the start point, hold "S" and move the mouse to the desired location.
      Similarly, to set the end point, hold "E" and move the mouse to the desired location.
      To set the walls, hold "W" and move the mouse to the desired location.`
  },
  {
    label: 'WAIT!! THERE IS MORE...',
    description: `Try out different functionalities such as changing the algorithm as well as its speed, 
                  changing the grid size dynamically. And ofcourse you can use it on phone too.`,
  },
  {
    label: 'WANT TO CONNECT WITH ME?',
    description: `Like what I made? Let's have a discussion! Contact me.`,
  }
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: 'fit-content', padding: '20px' }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height: 'fit-content', maxWidth: 400, width: '100%', p: 2 }}>
        {steps[activeStep].description}
        {activeStep === 0 ? <img src={asset1} style={{ width: '100%' }} alt="algo" /> : null}
        {activeStep === 1 ? <Legend /> : null}
        {activeStep === 3 ? <><Contact /><br /><br />
          <a href="https://innovation-gkh89dg8w-dakshgupta2002.vercel.app/">More about me</a>
        </> : null}

      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}