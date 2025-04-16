import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

const Slidenavbar = () => {

    const marqueeRef = useRef(null);
    const containerRef = useRef(null);
    const [duration, setDuration] = useState(0);

    const emailAddress = "arbazarmaan37@gmail.com";

    const handleClick = () => {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;
        window.open(gmailUrl, '_blank');
    };

    useEffect(() => {

        const timePerPixel = 5;
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = marqueeRef.current.offsetWidth;
        const distance = textWidth + containerWidth;
        const duration = timePerPixel * distance;
        setDuration(duration);

    }, []);

    const marqueeAnimation = keyframes`
        from {
            left: 100%;
        }
        to {
            left: 0;
            transform: translateX(-100%);
        }
    `;



    return (
        <Box
            className="topmarquee"
            sx={{
                width: '100%',
                position: 'fixed',
                bottom: 0,
                zIndex: 1000,
                display: 'flex',
                backgroundColor: "#97A4E3",

                color: "white",
            }}
            ref={containerRef}
            onClick={handleClick}
        >
            <Box
                className="marquee"
                sx={{
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '31px'
                }}
            >
                <Typography
                    id="marqueeText"
                    ref={marqueeRef}
                    className="marqueeText"
                    sx={{
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        margin: 0,
                        whiteSpace: 'nowrap',
                        left: '100%',
                        transform: 'translateX(0)',
                        animation: `${marqueeAnimation} ${duration}ms linear infinite`,
                        lineHeight: '31px',
                        width: 'fit-content',
                        fontWeight: 'bold',
                        letterSpacing: 4
                    }}
                >
                    Build. Grow. Succeed. Professional Website Development Services
                </Typography>
            </Box>
        </Box>
    );
};

export default Slidenavbar;
