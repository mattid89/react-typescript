import { Snackbar } from '@mui/material';
import React, { useState } from 'react';
import { useToast } from 'src/Hooks/UseToast';

const CustomSnackbar = () => {
  const [open, setOpen] = useState(true);
  const toast = useToast();

  return (
    <>
      <Snackbar open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default CustomSnackbar;