import React from 'react';
import { Button } from '@mui/material';
import IosShareIcon from '@mui/icons-material/IosShare';

const EmailButton = ({ fontName, font }) => {
  const emailAddress = "arbazarmaan37@gmail.com";

  const handleClick = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#254163', // Custom background color
        color: '#FFFFFF', // Custom text color
        fontSize: font,
        fontWeight: 'bold',
        '&:hover': {
          backgroundColor: 'blue' // Custom hover color
        }
      }}
      startIcon={<IosShareIcon />}
      onClick={handleClick}
    >
       {fontName}
    </Button>
  );
};

export default EmailButton;






