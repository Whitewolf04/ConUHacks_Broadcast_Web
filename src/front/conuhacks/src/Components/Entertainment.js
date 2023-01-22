import React from "react";
import Box from '@mui/material/Box';

class Entertainment extends React.Component {
    render() {
        return(
            <Box sx={{
                border: 1,
                borderColor: 'black',
                borderRadius: 3,
                width: '100%',
                height: '100%',
                backgroundColor: 'black',
                color: 'white',}}>
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