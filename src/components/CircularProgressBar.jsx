import React, { useEffect, useState } from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const CircularProgressBar = ({ target }) => {
    const [progress, setProgress] = useState(0);
    const { ref, inView } = useInView({
        triggerOnce: false, // Trigger every time it comes into view
    });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const duration = 1000; // 1 second
            const stepTime = Math.abs(Math.floor(duration / target));
            const timer = setInterval(() => {
                start += 1;
                setProgress(start);
                if (start === target) {
                    clearInterval(timer);
                }
            }, stepTime);
        }
    }, [inView, target]);

    return (
        <Box ref={ref} sx={{ position: 'relative', display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress variant="determinate"
                value={(progress / target) * 100}
                size={100}
                thickness={5}
                style={{ color: "blue" }} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" color="text.secondary" sx={{ fontSize: '20px', fontWeight: '800', color: "#254163" }}>
                    {`${Math.round(progress)}+`}
                </Typography>
            </Box>
        </Box>
    );
};

export default CircularProgressBar;



