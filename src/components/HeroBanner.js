import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material'

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
    return (
        <Box sx={{

        }} position="relative" p="30px">
            <Typography color="#FF2625" fontWeight='600' fontSize="26px">
                League of Fitness
            </Typography>
            <Typography fontWeight="600"
            sx={{fontSize: {lg: '44px', xs: '40px'}}}
            mb="10px" 
            >
                Work out to<br /> your content
            </Typography>

            <Button variant='contained' color='error' href='#exercises' sx={{backgroundColor: "#FF2625", padding: '10px'}}>View Exercises</Button>
            <Typography
            fontWeight="500" color="#FF2625" sx={{
                opacity: 0.1,
                display: {lg: 'block', xs: 'none'}
            }}
            fontSize="200px"
            >
                Let's Go!
            </Typography>
            <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
            </Box>
    )
}

export default HeroBanner