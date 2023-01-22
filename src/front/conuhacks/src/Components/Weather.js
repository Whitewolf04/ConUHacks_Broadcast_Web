import React from 'react';
import { Box, Typography, Grid } from '@mui/material';


class Weather extends React.Component {
    render() {
        return(
            <Box sx={{
                borderRadius: 3,
                color: 'white',
                p: 2,
                pl: 3,
            }}
            style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
                <h4>Weather</h4>
            </Box>
        )
    }
}

export default Weather;