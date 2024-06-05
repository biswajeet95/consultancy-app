
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { TextField, Button, Box, Typography, Alert, Snackbar } from '@mui/material';
import IosShareIcon from '@mui/icons-material/IosShare';
const InputBox = () => {
    const form = useRef();
    const [open, setOpen] = useState(false);
    const [error, setError] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_nnnxcf3', 'template_xkprzwk', form.current, '7bR3THJBayoUZm9PH')
            .then(
                () => {
                    setOpen(true);
                    setError('');
                },
                (error) => {
                    setError('Failed to send email. Please try again.');
                    setOpen(true);
                }
            );
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box
            component="form"
            ref={form}
            onSubmit={sendEmail}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '400px', margin: '0 auto' }}
        >   <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={error ? 'error' : 'success'} sx={{ width: '100%' }}>
                    {error ? error : 'Email sent successfully!'}
                </Alert>
            </Snackbar>
            <Typography variant="h5" gutterBottom>
                Contact Us
            </Typography>
            <TextField
                label="Name"
                name="from_name"
                variant="outlined"
                required
            />
            <TextField
                label="Email"
                name="from_email"
                type="email"
                variant="outlined"
                required
            />
            <TextField
                label="Contacts"
                name="contacts"
                type="tel"
                variant="outlined"
                required
            />
            <TextField
                label="Message"
                name="message"
                multiline
                rows={4}
                variant="outlined"
                required
            />
            <Button
                variant="contained"
                type="submit"
                sx={{
                    backgroundColor: '#254163', // Custom background color
                    color: '#FFFFFF', // Custom text color
                    fontWeight: 'bold',
                    '&:hover': {
                        backgroundColor: 'blue' // Custom hover color
                    }
                }}
                startIcon={<IosShareIcon />}

            >
                Send
            </Button>

        </Box>
    );
};

export default InputBox;
