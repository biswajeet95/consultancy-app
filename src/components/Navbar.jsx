
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';

import TopNavbar from './TopNavbar'

const pages = ['HOME', 'SERVICE', 'JOBS', 'ABOUTUS', 'CONTACT'];
const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
      


        <AppBar

            style={{
                backgroundColor: "white", color: "#254163"
            }}>
            <TopNavbar />
            <Toolbar>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                      sx={{marginRight:"1rem"}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" sx={{ fontWeight: 'bold', '&:hover': { color: 'blue' } }}>{page}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>



                </Box>
                <IconButton edge='start' aria-label='logo' sx={{}}>

                    <a href="" >
                        <img width="120" height='60' src="./image/Logo.png" alt="IQRA CUNSOLTANCY"></img>
                    </a>
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />
                <Box sx={{ display: { xs: 'none', md: 'flex', fontWeight: 'bold' } }}>


                    {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography sx={{ fontWeight: 'bold', '&:hover': { color: 'blue' } }} textAlign="center">{page}</Typography>
                        </MenuItem>
                    ))}

                </Box>

            </Toolbar>
           
        </AppBar>

    )
}

export default Navbar

