import React from 'react';
import { Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const EmailButton = () => {
  const emailAddress = "arbazarmaan37@gmail.com";

  const handleClick = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<EmailIcon />}
      onClick={handleClick}
    >
      Contact Us
    </Button>
  );
};

export default EmailButton;