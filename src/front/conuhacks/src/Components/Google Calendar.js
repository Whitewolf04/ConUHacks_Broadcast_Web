import React from "react";
import Box from '@mui/material/Box';


class GoogleCalendar extends React.Component {
    render() {
        return(
            <Box sx={{
                borderRadius: 3,
                p: '5px',
                width: '100 %',
                height: '100 %',
                color: "white",}}
                style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
                    <Box sx={{
                        textAlign: "center"
                    }}>Google Calendar</Box>
                    <Box sx={{
                        textAlign: "center"
                    }}>Content</Box>
            </Box>
        )
    }
}

export default GoogleCalendar;