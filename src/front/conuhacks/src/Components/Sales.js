import React, {useState, useEffect} from 'react';
import { Box, Typography, Grid } from '@mui/material';

function SalesCount() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCount(count + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [count]);
    
    return(
        <Typography variant='h6' fontWeight={'bold'} textAlign='right'>{count}</Typography>
    )
}
class Sales extends React.Component {

    render() {
        return(
            <Box sx={{
                borderRadius: 3,
                color: 'white',
                p: 2,
                pl: 3,
            }}
            style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
                <Grid container >
                    <Grid item xs={10}>
                        <Typography variant='h6' fontWeight={'bold'}>Monthly Sales</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <SalesCount/>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default Sales;