
import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';

const OurService = () => {
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
                //backgroundColor: "#F5F5F5",
                color: "#254163",
                transition: 'opacity 1s, transform 1s',
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)'
            }}
        >
            <Typography variant="h4" sx={{ fontWeight: '800', fontSize: variant6font, mb: 3 }}>
                PRIVACY POLICY
            </Typography>
            <Grid container sx={{ p: 1, justifyContent: 'center' }}>
                <Grid item xs={11} md={5} sx={gridItemStyle(variantFont)}>
                    <h4 className="text-xl font-semibold mt-6">Privacy Policy</h4>
                    <p className="mb-4">
                        This Privacy Policy outlines how <strong><a
                            href="https://www.iqraconsultancy.in/blogs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline mx-1"
                        >
                            IQra Blogs
                        </a></strong> collects, uses, and protects your personal information. By using our website, you agree to the terms of this policy.
                    </p>

                    <h4 className="text-xl font-semibold mt-6">Information We Collect</h4>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Personal information you provide (e.g., name, email via contact forms)</li>
                        <li>Non-personal information (e.g., browser type, operating system, referring website)</li>
                        <li>Cookies for analytics and advertising</li>
                    </ul>

                    <h4 className="text-xl font-semibold mt-6">How We Use Information</h4>
                    <ul className="list-disc pl-6 mb-4">
                        <li>To improve website performance and user experience</li>
                        <li>To respond to your inquiries</li>
                        <li>To serve personalized ads via third-party services like Google AdSense</li>
                    </ul>
                </Grid>
                <Grid item xs={11} md={5} sx={gridItemStyle(variantFont)}>
                    <h4 className="text-xl font-semibold mt-6">Google AdSense & Cookies</h4>
                    <p className="mb-2">
                        We use Google AdSense to display ads. Google uses cookies to serve ads based on a user’s prior visits to this and other websites.
                        You can opt out of personalized advertising by visiting the
                        <a
                            href="https://www.google.com/settings/ads"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline mx-1"
                        >
                            Google Ads Settings
                        </a>
                        page.
                    </p>


                    <h4 className="text-xl font-semibold mt-6">Data Security</h4>
                    <p className="mb-4">
                        We implement appropriate security measures to protect your information. However, no method of transmission over the internet is 100% secure.
                    </p>

                    <h4 className="text-xl font-semibold mt-6">Children’s Privacy</h4>
                    <p className="mb-4">
                        Our site is not intended for children under 13. We do not knowingly collect personal information from children.
                    </p>

                    <h4 className="text-xl font-semibold mt-6">Changes to This Policy</h4>
                    <p className="mb-4">
                        We may update this Privacy Policy at any time. Please check back regularly for updates.
                    </p>




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

export default OurService;
