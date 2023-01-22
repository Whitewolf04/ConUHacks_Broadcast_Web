// import logo from './logo.svg';
import './CSS/App.css';
import './Components/Discord'
import Discord from './Components/Discord';
import Entertainment from './Components/Entertainment';
import MSTeams from './Components/MSTeams';
import GoogleCalendar from './Components/Google Calendar';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box'


function App() {
  return (
    <Box>
      <Box sx={{p: 2}}>
        <Grid container spacing={10}>
          <Grid item xs={6}>  {/* Grid Big Left (MSTeams) */}
            <MSTeams/>
          </Grid>
          <Grid item xs={6}> {/* Grid Big Right */}
            <Stack spacing={2}>
              <Grid container spacing={4}>
                <Grid item xs={6}> {/* Grid Small Upper left (Discord) */}
                  <Discord></Discord>
                </Grid>
                <Grid item xs={6}>  {/* Grid Small Upper Right (Entertainment) */}
                  <Entertainment></Entertainment>
                </Grid>
              </Grid>
              <GoogleCalendar></GoogleCalendar>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
