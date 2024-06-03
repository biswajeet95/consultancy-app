import React from 'react'
import { Container, Box, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import EmailButton from './EmailButton';

const positions = [
  "TeamLeader/ Assistant Manager/ Manager International BPO CSR/TSR",

  'Fresh Graduates for International & Domestic BPOs Jobs',

  'DevOps Engineers and development',

  'Senior Software Engineer - Data Engineering  ',

  'Customer Service/Order to Cash Collections/ Banking Voice Support   ',

  'MERN Full Stack Developer',

  'Team Lead to Manage Developers',

  'SAP ABAP Consultants Junior and Senior',

  'iOS OR ANDRIOD App Developer',
];
const JobSection = () => {
  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));


    let variant4font;
    let variant6font;
    let variantsmfont;

    if (isMobile) {

        variant4font = '10px';
        variant6font = '12px';
        variantsmfont = '6px';
    } else if (isTablet) {

        variant4font = '20px';
        variant6font = '15px';
        variantsmfont = '8px';
    }

  return (
    < Container maxWidth='false' sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 3 }}>

      <Typography variant="h4" sx={{ fontWeight: '800', color: "#254163", fontSize: variant4font }}> HOT/CURRENT OPENINGS</Typography>
      <Typography variant="h6" sx={{ color: "blue", fontSize: variantsmfont }}>Daily Events Schedule Pl Note Most of the Rounds Now are Walkin Only Some are Work from Home</Typography>
      <Box sx={{
        p: 3,
        marginTop: '20px',
        width: '100%',
        marginBottom: "30px"

      }}>
        {positions.map((position) => (
          <Grid key={position} sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", my: 2 }} >

            <Grid sx={{width:"50%"}}>
              <Typography variant="body1" component="p" sx={{ marginBottom: '15px',color: "#254163", fontSize: variant6font, fontWeight: '800'  }}>
                {position}
              </Typography>
            </Grid>

            <EmailButton fontName={'Apply Now'} />

          </Grid>
        ))}









      </Box>

    </Container>
  )
}

export default JobSection