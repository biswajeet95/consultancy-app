import { AppBar, Box, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AppBar
            position='sticky'
            style={{
                backgroundColor: "#97A4E3",
                boxShadow: 'none',
                color: "white"
            }}
        >
            <Toolbar variant="dense" sx={{ justifyContent: 'space-between', minHeight: '30px !important', padding: '3px 6px' }}>
                <Box>
                    <Typography sx={{ fontWeight: 'bold' }} variant={isMobile ? 'body2' : 'body1'}>
                        Call: 7075910637, 9676311306
                    </Typography>
                </Box>
                <Box>
                    <Typography sx={{ fontWeight: 'bold' }} variant={isMobile ? 'body2' : 'body1'}>
                    admin@iqraconsultancy.in, arbazarmaan37@gmail.com
                    </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                    <a href="#">
                        <IconButton style={{ color: 'white', padding: '4px' }}>
                            <XIcon style={{ fontSize: '15px' }} />
                        </IconButton>
                    </a>
                    <a href="#">
                        <IconButton style={{ color: 'white', padding: '4px' }}>
                            <InstagramIcon style={{ fontSize: '15px' }} />
                        </IconButton>
                    </a>
                    <a href="https://www.facebook.com/arbaz.armaan.3/">
                        <IconButton style={{ color: 'white', padding: '4px' }}>
                            <FacebookIcon style={{ fontSize: '15px' }} />
                        </IconButton>
                    </a>
                    <a href="#">
                        <IconButton style={{ color: 'white', padding: '4px' }}>
                            <LinkedInIcon style={{ fontSize: '15px' }} />
                        </IconButton>
                    </a>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
