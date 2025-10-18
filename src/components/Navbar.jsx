// import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import React, { useState } from 'react';
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
// import TopNavbar from './TopNavbar';

// const pages = ['HOME', 'BLOGS', 'SERVICE', 'PRIVACYPOLICY', 'ABOUT', 'CONTACT'];

// const Navbar = () => {
//     const [anchorElNav, setAnchorElNav] = useState(null);

//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     return (
//         <AppBar style={{ backgroundColor: "white", color: "#254163" }}>
//             <TopNavbar />
//             <Toolbar>
//                 <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//                     <IconButton
//                         size="large"
//                         aria-label="account of current user"
//                         aria-controls="menu-appbar"
//                         aria-haspopup="true"
//                         onClick={handleOpenNavMenu}
//                         color="inherit"
//                         sx={{ marginRight: "1rem" }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Menu
//                         id="menu-appbar"
//                         anchorEl={anchorElNav}
//                         anchorOrigin={{
//                             vertical: 'bottom',
//                             horizontal: 'left',
//                         }}
//                         keepMounted
//                         transformOrigin={{
//                             vertical: 'top',
//                             horizontal: 'left',
//                         }}
//                         open={Boolean(anchorElNav)}
//                         onClose={handleCloseNavMenu}
//                         sx={{ display: { xs: 'block', md: 'none' } }}
//                     >
//                         {pages.map((page) => (
//                             <MenuItem key={page} onClick={handleCloseNavMenu}>
//                                 <ScrollLink to={page.toLowerCase()} smooth={true} duration={500}>
//                                     <Typography textAlign="center" sx={{ fontWeight: 'bold', '&:hover': { color: 'blue' } }}>
//                                         {page}
//                                     </Typography>
//                                 </ScrollLink>
//                             </MenuItem>
//                         ))}
//                     </Menu>
//                 </Box>
//                 <IconButton edge='start' aria-label='logo'>
//                     <a href="/">
//                         <img width="120" height='60' src="./image/Logo.png" alt="IQRA CONSULTANCY"></img>
//                     </a>
//                 </IconButton>
//                 <Typography variant='h6' component='div' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />
//                 <Box sx={{ display: { xs: 'none', md: 'flex', fontWeight: 'bold' } }}>
//                     {pages.map((page) => (
//                         <ScrollLink key={page} to={page.toLowerCase()} smooth={true} duration={500}>
//                             <MenuItem onClick={handleCloseNavMenu}>
//                                 <Typography sx={{ fontWeight: 'bold', '&:hover': { color: 'blue' } }} textAlign="center">
//                                     {page}
//                                 </Typography>
//                             </MenuItem>
//                         </ScrollLink>
//                     ))}
//                 </Box>
//             </Toolbar>
//         </AppBar>
//     );
// };

// export default Navbar;





import React, { useState } from 'react';
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import TopNavbar from './TopNavbar';

const pages = ['HOME', 'BLOGS', 'SERVICE', 'PRIVACYPOLICY', 'ABOUT', 'CONTACT'];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // Function to convert page name to route
    const getRoute = (page) => {
        if (page === 'HOME') return '/';
        return '/' + page.toLowerCase();
    };

    return (
        <AppBar position="fixed" style={{ backgroundColor: "white", color: "#254163" }}>
            <TopNavbar />

            <Toolbar>
                {/* Mobile Menu */}
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        sx={{ marginRight: "1rem" }}
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
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Link 
                                    to={getRoute(page)} 
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    <Typography textAlign="center" sx={{ fontWeight: 'bold', '&:hover': { color: 'blue' } }}>
                                        {page}
                                    </Typography>
                                </Link>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                {/* Logo */}
                <IconButton edge='start' aria-label='logo'>
                    <Link to="/">
                        <img width="120" height='60' src="./image/Logo.png" alt="IQRA CONSULTANCY" />
                    </Link>
                </IconButton>

                <Typography variant='h6' component='div' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />

                {/* Desktop Menu */}
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Link 
                                to={getRoute(page)} 
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <Typography sx={{ fontWeight: 'bold', '&:hover': { color: 'blue' } }} textAlign="center">
                                    {page}
                                </Typography>
                            </Link>
                        </MenuItem>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
