import React from "react";
import '../CSS/small.css';
import Box from "@mui/material/Box"
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem"
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';


class GeneralAnnouncement extends React.Component {
    render() {
        return(
            <Box>
                <List sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: 300,
                    }}>
                    <ListSubheader sx={{textAlign: 'left', mb: -1}}>General Announcement</ListSubheader>
                    <ListItem sx={{mt: -1}}>
                        <ListItemText primary="Announcement Headline" secondary="Jan 21 2023" />
                    </ListItem>
                </List>
            </Box>
        )
    }
}

class DepartmentAnnouncement extends React.Component {
    render() {
        return (
            <Box>
                <List sx={{
                        width: '100%',
                        bgcolor: 'background.paper',
                        position: 'relative',
                        overflow: 'auto',
                    }}>
                    <ListSubheader sx={{textAlign: 'left', mb: -1}}>Department Announcement</ListSubheader>
                    <ListItem sx={{mt: -1}}>
                        <ListItemText primary="Announcement Headline" secondary="Jan 21 2023" />
                    </ListItem>
                </List>
            </Box>
        )
    }
}

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