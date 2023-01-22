import React from "react";
import Box from '@mui/material/Box';

class Entertainment extends React.Component {
    render() {
        return(
            <Box sx={{
                borderRadius: 3,
                width: '100%',
                height: '100%',
                backgroundColor: 'transparent',
                color: 'white',}}
                style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
                    <Box sx={{
                        textAlign: "center",
                        fontWeight: 'bold',
                        pt: 3
                    }}>Meme of the day</Box>
                    <Box sx={{
                        textAlign: "center"
                    }}>Content</Box>
            </Box>
        )
    }
}

export default Entertainment;