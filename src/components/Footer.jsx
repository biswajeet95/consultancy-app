import { Container, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Container maxWidth='false' sx={{ height: '15vh', width: '100%', display: 'flex', justifyContent:"center", alignItems:"center", backgroundColor: "#97A4E3" }}>
            <Typography variant='h6' sx={{ fontSize: "8px", color:"white" }}>
                © Copyright WhiteHorseManpower. All Rights Reserved
            </Typography>

        </Container>
    )
}

export default Footer