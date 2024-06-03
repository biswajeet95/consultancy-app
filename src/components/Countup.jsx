import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import makeStyles from '@emotion/styled';
import anime from 'animejs';


const useStyles = makeStyles(() => ({
    countupContainer: {
        display: 'inline-block',
    },
}));

const CountUp = ({ target, font }) => {
    const classes = useStyles();
    const [count, setCount] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateCount();
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(document.getElementById('countup'));

        return () => {
            observer.disconnect();
        };
    }, []);

    const animateCount = () => {
        anime({
            targets: { count: 0 },
            count: target,
            duration: 1500, // Set duration to 1000 milliseconds (1 second)
            round: 1,
            easing: 'linear',
            update: (animation) => { // Define animation variable
                setCount(Math.floor(animation.animations[0].currentValue));
            },
        });
    };

    return (
        <Typography variant="h6" className={classes.countupContainer} sx={{ fontWeight: '800', color: "blue", fontSize:font }}>
            {count.toLocaleString()}+
        </Typography>
    );
};


export default CountUp;
