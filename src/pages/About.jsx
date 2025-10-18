
import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import Navbar from '../components/Navbar'

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  let variantFont = '15px';
  let variant6font
  if (isMobile) {
    variantFont = '12px';
    variant6font = '12px';
  } else if (isTablet) {
    variantFont = '15px';
    variant6font = '10px';
  }

  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: '100%',
          textAlign: 'center',
          pt: 4, pb: 4,
          backgroundColor: "#F5F5F5",
          color: "#254163",
          transition: 'opacity 1s, transform 1s',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(20px)'
        }}
      >

        <Grid container sx={{ p: 4, justifyContent: 'center' }}>
          <Grid item xs={11} mt={5} sx={gridItemStyle(variantFont)}>
            <Typography variant="h3" sx={{ fontWeight: '800', fontSize: variantFont, mt: 3 }}>
              ABOUT US
            </Typography>
            <Typography variant="body1" component="p" sx={{ fontSize: variantFont }}>
              <p className="mb-2">
                Welcome to IQra ! I'm jeet, a passionate blogger who loves writing about New Tech and Web Development Knowladge.
              </p>
              <p className="mb-2">
                This blog is all about sharing valuable insights, tips, and stories on Tech and Development Learning. My goal is to create a space where readers can find inspiration and helpful information.
              </p>
              <p>
                Thanks for visiting, and feel free to connect with me!
              </p>

            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>

  );
};

const gridItemStyle = (fontSize) => ({
  textAlign: 'left',
  borderTopRightRadius: '80px',
  borderBottomLeftRadius: '80px',
  border: '1px solid #254163',
  backgroundColor: "white",
  overflow: 'hidden',
  margin: '8px',
  padding: '24px',
  fontSize: fontSize,
  transition: 'opacity 1s, transform 1s',
  opacity: 1,
  transform: 'translateY(0)'
});

export default About;


