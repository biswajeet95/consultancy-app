
import React, { useState, useEffect, useRef } from 'react';
import { Typography } from '@mui/material';
import anime from 'animejs';

const CountUp = ({ target, font }) => {
    const [count, setCount] = useState(0);
    const countupRef = useRef(null);

    useEffect(() => {
        const animateCount = () => {
            anime({
                targets: { count: 0 },
                count: target,
                duration: 1500,
                round: 1,
                easing: 'linear',
                update: (animation) => {
                    setCount(Math.floor(animation.animations[0].currentValue));
                },
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateCount();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (countupRef.current) {
            observer.observe(countupRef.current);
        }

        animateCount(); // Trigger countup on refresh

        return () => {
            if (countupRef.current) {
                observer.unobserve(countupRef.current);
            }
        };
    }, [target]);

    return (
        <Typography
            variant="h6"
            ref={countupRef}
            sx={{ fontWeight: '800', color: 'blue', fontSize: font }}
        >
            {count.toLocaleString()}+
        </Typography>
    );
};

export default CountUp;

