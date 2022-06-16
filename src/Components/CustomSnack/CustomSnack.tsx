import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { hideSnack, SnackbarSubscription } from 'src/Services/Snackbar.service';

const CustomSnack = () => {
      const snackEvent = SnackbarSubscription();

      return (
        <Snackbar
          open={snackEvent?.open}
          onClose={() => hideSnack()}
          message={snackEvent?.message}
        />
      );
};

export default CustomSnack;