import React from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

class Header extends React.Component{
    render() {
        return(
            <Box sx={{
                bgcolor: "#5ABEF9",
                borderRadius: 1,
                textAlign: 'center',
                p: 3,
                }}>
                <Typography variant='h4' sx={{fontWeight: 'bold'}}>Mirego</Typography>
            </Box>
        )
    }
}

export default Header;