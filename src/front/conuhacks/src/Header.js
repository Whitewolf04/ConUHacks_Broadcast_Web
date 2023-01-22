import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

class Header extends React.Component{
    render() {
        return(
            <Box sx={{
                // bgcolor: "#5ABEF9",
                borderRadius: 1,
                textAlign: 'center',
                p: 3,
                }}>
                    <Typography variant='body1'
                        sx={{fontWeight: 'bold'}} 
                        color={'white'} 
                        align='left'
                    >
                        MIREGO BROADCAST</Typography>
            </Box>
        )
    }
}

export default Header;