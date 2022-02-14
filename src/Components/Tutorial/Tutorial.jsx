import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Stepper from './Stepper';
import { ContactSupportSharp } from '@mui/icons-material';

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

export default function Tutorial(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Button variant="outlined" onClick={handleClickOpen} style={{marginRight: '10px'}} size="small" disabled={props.isWorking}>
        <ContactSupportSharp/>
      </Button>
    

      <SimpleDialog
        open={open}
        onClose={handleClose}
        selectedValue={'tutorial'}
      />
    </div>
  );
}