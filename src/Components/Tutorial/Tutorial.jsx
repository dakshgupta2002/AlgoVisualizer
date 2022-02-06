import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Stepper from './Stepper';
import Legend from './Legend';

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
        <Stepper/>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Button variant="outlined" onClick={handleClickOpen} style={{marginRight: '10px'}}>
        Tutorial
      </Button>
      
      <Legend/>

      <SimpleDialog
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}