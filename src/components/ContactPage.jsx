

import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import EmailButton from './EmailButton';

const ContactPage = () => {
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
         
            <Grid container sx={{ p: 1, justifyContent: 'center' }}>
            <Grid item xs={11} md={5} sx={gridItemStyle(variantFont)}>
                     <Typography variant="h3" sx={{ fontWeight: '800', fontSize: variantFont, mb: 1 }}>
                         ABOUT US
                     </Typography>
                     <Typography variant="body1" component="p" sx={{ marginBottom: '20px', fontSize: variantFont }}>
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
          



                <Grid item xs={11} md={5} sx={gridItemStyle(variantFont)}>
                     <Typography variant="h3" sx={{ fontWeight: '800', fontSize: variantFont, mb: 1 }}>
                         CONTACT US
                     </Typography>
                     <div>
                         <Typography variant="h4" sx={{ fontWeight: '800', fontSize: variantFont, mb: 5 }}>IQra Consultancy</Typography>
                         <p>
                             If you have any questions or concerns, contact us at:
                             <br />
                             <strong>Email:moharana9519@gmail.com
                             </strong>
                         </p>
                         <EmailButton fontName={'Contact'} font={variant6font} />
                     </div>
                 </Grid>
            </Grid>
        </Box>
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

export default ContactPage;




