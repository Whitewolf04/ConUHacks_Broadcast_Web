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
                        bgcolor: '#6264A7',
                        position: 'relative',
                        overflow: 'auto',
                    }}>
                    <ListSubheader sx={{textAlign: 'left', pl: 3, bgcolor: '#6264A7'}}>General Announcement</ListSubheader>
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
                        bgcolor: '#6264A7',
                        position: 'relative',
                        overflow: 'auto',
                    }}>
                    <ListSubheader sx={{textAlign: 'left', pl: 3, bgcolor: '#6264A7'}}>Department Announcement</ListSubheader>
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
                        bgcolor: '#6264A7',
                        position: 'relative',
                        overflow: 'auto',
                    }}>
                    <ListSubheader sx={{textAlign: 'left', pl: 3, bgcolor: '#6264A7'}}>Team Announcement</ListSubheader>
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

class MSTeams extends React.Component {
    render() {
        return (
            <Box sx={{
                border: 1,
                borderColor: '#6264A7',
                borderRadius: 3,
                width: '100%',
                height: '100%',
                minHeight: {lg: 550},
                backgroundColor: '#6264A7',
                color: 'white',
                }}>
                    <Box sx={{textAlign: "center", fontWeight: 'bold', pt: 3}}>Microsoft Teams</Box>
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

export default MSTeams;