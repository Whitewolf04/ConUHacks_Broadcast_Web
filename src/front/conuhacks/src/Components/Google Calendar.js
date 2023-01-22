import React from "react";
import Box from '@mui/material/Box';


class GoogleCalendar extends React.Component {
    render() {
        return(
            <Box sx={{
                    borderRadius: 3,
                    bgcolor: "transparent",
                    height: '100%',
                    pl: 3,
                    pr: 3,
                }}
                style={{ backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
                    <Box sx={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "white",
                        pt: 3,
                        pb: 2,
                    }}>Google Calendar</Box>
                    <Box sx={{
                        textAlign: "center"
                    }}>Content</Box>
            </Box>
        )
    }
}

export default GoogleCalendar;