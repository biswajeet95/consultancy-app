import React from 'react'
import { Button } from '@mui/material'

const Buttonsection = ({ fontName, font }) => {
    return (
        <>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: '#254163', // Custom background color
                    color: '#FFFFFF', // Custom text color
                    fontSize: font,
                    fontWeight: 'bold',
                    '&:hover': {
                        backgroundColor: 'blue' // Custom hover color
                    }
                }}
            >
                {fontName}
            </Button>
        </>

    )
}

export default Buttonsection