import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import EmailButton from './EmailButton';

function InputBox() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Name"
                    multiline

                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Email"
                    multiline

                />
                <TextField
                    id="outlined-textarea"
                    label="Contact"

                    multiline
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={4}

                />

            </div>
            <EmailButton sx={{mr:5}}/>
        </Box>
    );
}
export default InputBox;