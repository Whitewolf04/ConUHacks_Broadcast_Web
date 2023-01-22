import React from "react";
import Box from "@mui/material/Box"
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem"
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Grid from  '@mui/material/Grid';



class GeneralAnnouncement extends React.Component {
    render() {
        return(
            <Box>
                <List sx={{
                        width: '100%',
                        bgcolor: 'transparent',
                        position: 'relative',
                        overflow: 'auto',
                    }}>
                    <ListSubheader sx={{textAlign: 'left', pl: 3, bgcolor: 'transparent'}}>General Announcement</ListSubheader>
                    <ListItem sx={{mt: -1}}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} md={10} sx={{border: 2, borderRadius: 2, pl: 2}}>
                                <ListItemText primary="Announcement Headline"></ListItemText>
                            </Grid>
                            <Grid item xs={12} md={2} sx={{textAlign: {xs:'left', md:'right'}, pr: 1}}>
                                <ListItemText secondary="Jan 21"></ListItemText>
                            </Grid>
                        </Grid>
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
                        bgcolor: 'transparent',
                        position: 'relative',
                        overflow: 'auto',
                    }}>
                    <ListSubheader sx={{textAlign: 'left', pl: 3, bgcolor: 'transparent'}}>Department Announcement</ListSubheader>
                    <ListItem sx={{mt: -1}}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} md={10} sx={{border:2, borderRadius:2, pl: 2}}>
                                <ListItemText primary="Announcement Headline"></ListItemText>
                            </Grid>
                            <Grid item xs={12} md={2} sx={{textAlign: {xs:'left', md:'right'}, pr: 1}}>
                                <ListItemText secondary="Jan 21"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>
            </Box>
        )
    }
}

class TeamAnnouncement extends React.Component {
    render() {
        return (
            <Box>
                <List sx={{
                        width: '100%',
                        bgcolor: 'transparent',
                        position: 'relative',
                        overflow: 'auto',
                    }}>
                    <ListSubheader sx={{textAlign: 'left', pl: 3, bgcolor: 'transparent'}}>Team Announcement</ListSubheader>
                    <ListItem sx={{mt: -1}}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} md={10} sx={{border:2, borderRadius:2, pl: 2}}>
                                <ListItemText primary="Announcement Headline"></ListItemText>
                            </Grid>
                            <Grid item xs={12} md={2} sx={{textAlign: {xs:'left', md:'right'}, pr: 1}}>
                                <ListItemText secondary="Jan 21"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>
            </Box>
        )
    }
}

class Twitter extends React.Component {
    render() {
        return (
            <Box sx={{
                borderRadius: 3,
                backgroundColor: 'transparent',
                color: 'white',
                height: '100%',
                }}
                style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
                    <Box sx={{textAlign: "center", fontWeight: 'bold', pt: 3}}>Twitter</Box>
                    <Box>
                        <GeneralAnnouncement/>
                    </Box>
                    <Box>
                        <DepartmentAnnouncement/>
                    </Box>
                    <Box>
                        <TeamAnnouncement/>
                    </Box>
            </Box>
        )
    }
}

export default Twitter;