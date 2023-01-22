import React from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

class Header extends React.Component{
    render() {
        return(
            <Box sx={{textAlign: 'center', pt: 3, pb: 5}}>
                <Typography variant='h4' sx={{fontWeight: 'bold'}}>Mirego</Typography>
            </Box>
        )
    }
}

export default Header;