
import React from 'react';
import { Container, Box, Typography, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import ProgressSection from './ProgressSection';

const Ditails = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    let variant4font;
    let variant6font;

    if (isMobile) {
        variant4font = '10px';
        variant6font = '12px';
    } else if (isTablet) {
        variant4font = '20px';
        variant6font = '15px';
    }

    return (
        <Container maxWidth='false' sx={{ backgroundColor: "#F5F5F5", display: "flex", flexDirection: "column", alignItems: "center", color: "#254163", p: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: '800', fontSize: variant6font }}> Welcome To IQra Consultancy</Typography>
            <Box sx={{ color: "#254163", border: '1px solid #254163', p: 3, borderTopRightRadius: '80px', borderBottomLeftRadius: '80px', overflow: 'hidden', marginTop: '20px', width: '100%', boxSizing: 'border-box', backgroundColor: "white", marginBottom: "30px" }}>
                <Typography variant="body1" component="p" sx={{ marginBottom: '15px', fontSize: variant6font }}>
                    IQra Consultancy stands as a beacon of excellence in the realm of workforce solutions.
                    As a distinguished player in the industry, our journey has been marked by a commitment to unparalleled service,
                    a dedication to client success, and an unwavering focus on the dynamic needs of the employment landscape.
                </Typography>
                <Typography variant="body1" component="p" sx={{ marginBottom: '15px', fontSize: variant6font }}>
                    Since our inception, we have carved a niche for ourselves as specialists in the IT and ITES domains,
                    earning the coveted status of being the preferred recruitment firm for many Fortune 500 companies.
                    Our journey, rooted in the robust framework of the Companies Act of 1956,
                    has been characterized by a relentless pursuit of quality and innovation.
                </Typography>
                <Typography variant="body1" component="p" sx={{ marginBottom: '15px', fontSize: variant6font }}>
                    At the heart of our success lies a team of experienced and dedicated client managers,
                    meticulously trained in account management, ensuring that our clients receive not just service but an enduring partnership.
                    These professionals spearhead strategic sourcing and headhunting initiatives,
                    curating candidate profiles that seamlessly align with the unique needs of our esteemed client companies.
                </Typography>
                <Typography variant="body1" component="p" sx={{ marginBottom: '15px', fontSize: variant6font }}>
                    Setting us apart in the industry is our unique and automated resume management process,
                    a technological innovation that caters to high-volume staffing needs with unparalleled efficiency.
                    This, combined with our customized reporting, metrics, and tracking system,
                    positions us as architects of process improvement, consistently delivering better effectiveness for our clients.
                </Typography>
                <Typography variant="body1" component="p" sx={{ fontWeight: 'bold', marginBottom: '15px', fontSize: variant6font, marginBottom: '-15px' }}>
                    Process:
                </Typography>
                <List sx={{ listStyleType: 'disc', paddingLeft: '1em' }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText primary={<Typography variant="body1" sx={{ fontSize: variant6font, marginBottom: '-20px' }}>Our team comprises proficient and devoted client managers who have undergone thorough account management training.</Typography>} />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText primary={<Typography variant="body1" sx={{ fontSize: variant6font, marginBottom: '-20px' }}>They specialize in strategic sourcing and headhunting, ensuring alignment between candidate profiles and the specific requirements of client companies.</Typography>} />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText primary={<Typography variant="body1" sx={{ fontSize: variant6font, marginBottom: '-20px' }}>Utilizing a distinctive automated resume management process, we efficiently cater to high-volume staffing needs.</Typography>} />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText primary={<Typography variant="body1" sx={{ fontSize: variant6font, marginBottom: '-20px' }}>Employing a personalized reporting, metrics, and tracking system, we empower our clients by enhancing process efficiency and overall effectiveness.</Typography>} />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <ListItemText primary={<Typography variant="body1" sx={{ fontSize: variant6font, marginBottom: '-20px' }}>Our services and support structures are finely tuned to meet client needs, addressing placement precision, volume considerations, and the uncompromising quality of staffing.</Typography>} />
                    </ListItem>
                </List>
            </Box>
            <ProgressSection font={variant6font} />
        </Container>
    );
}

export default Ditails;

