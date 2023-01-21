import React from "react";
import Box from '@mui/material/Box';

class MSTeams extends React.Component {
    render() {
        return (
            <Box sx={{
                border: 1,
                borderColor: 'red',
                borderRadius: '8px',
                p: '5px',
                width: '100 %',
                height: '100 %'}}>
                    <Box sx={{
                        textAlign: "center"
                    }}>MSTeams</Box>
                    <Box sx={{
                        textAlign: "center"
                    }}>Content</Box>
            </Box>
        )
    }
}

export default MSTeams;