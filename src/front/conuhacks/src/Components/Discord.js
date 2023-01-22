import React from "react";
import Box from '@mui/material/Box';


class ChatFeed extends React.Component{
    render() {
        return (
            <Box sx={{bgcolor: '#2C2F33', borderRadius: 0.9}}>
                Content
            </Box>
        )
    }
}

class Discord extends React.Component {
    render() {
        return (
            <Box sx={{
                borderRadius: 3,
                width: '100 %',
                height: '100 %',
                bgcolor: 'transparent',
                minHeight: {lg: 225}}}
                style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
                    <Box sx={{
                        textAlign: "center",
                        fontWeight: 'bold',
                        color: 'white',
                        pt: 3,
                    }}>Discord</Box>
                    <Box sx={{pl: 2, pr: 2, pt: 2, pb: 1}}>
                        <ChatFeed/>
                    </Box>
            </Box>
        )
    }
}

export default Discord;