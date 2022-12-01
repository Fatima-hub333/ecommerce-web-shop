import React, {useState} from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import useStyles from './styles';

const steps = ['Shipping Address', 'Payment details'];

const Checkout = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const Form = () => activeStep === 0
    ? <AddressForm />
    : <PaymentForm />

  return (
    <>
      <AddressForm>
        <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
            </Stepper>
            {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
      </AddressForm>
      
    </>
  )
}

export default Checkout
