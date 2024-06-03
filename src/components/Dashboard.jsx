import React from 'react'
import HeroSection from './HeroSection'
import { Box,Typography } from '@mui/material'
import Ditails from './Ditails'
import JobSection from './JobSection'
import Workfromhome from './Workfromhome'
import Footer from './Footer'

const Dashboard = () => {
  return (
    <Box component="main">
        <HeroSection/>
        <Ditails/>
        <JobSection/>
        <Workfromhome/>
        <Footer/>
       
    </Box>
  )
}

export default Dashboard