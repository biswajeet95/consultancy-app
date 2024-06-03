import React from 'react'
import HeroSection from './HeroSection'
import { Box,Typography } from '@mui/material'
import Ditails from './Ditails'
const Dashboard = () => {
  return (
    <Box component="main">
        <HeroSection/>
        <Ditails/>
    </Box>
  )
}

export default Dashboard