import React from 'react'
import {Box, Stack, Typography} from '@mui/material'

import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
    return (
        <Box mt="50px" bgcolor="#FFF3F4">
<Stack gap="20px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt='logo' width="200px" height="60px" />

    </Stack>
        </Box>
    )
}

export default Footer