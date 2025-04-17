

import React from 'react';
import { Button } from '@mui/material';
import IosShareIcon from '@mui/icons-material/IosShare';

const EmailButton = ({ fontName, font }) => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfq_tZA9VZBUJ1gHbeQUw2EqYZKSox6wnk5_rCMSYJZtbU7uA/viewform?usp=pp_url";
  const handleClick = () => {
    window.open(googleFormUrl, '_blank');
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
