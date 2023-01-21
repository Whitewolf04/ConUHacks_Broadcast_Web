import logo from './logo.svg';
import './CSS/App.css';
import './Components/Discord'
import Discord from './Components/Discord';
import Entertainment from './Components/Entertainment';
import MSTeams from './Components/MSTeams';
import GoogleCalendar from './Components/Google Calendar';
import Grid from '@mui/material/Grid';
import Grid2 from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';



function App() {
  return (
    <div style={{border: '1px solid black'}}>
      <div >
        <Grid container spacing={10}>
          <Grid item xs={6}>  {/* Grid Big Left (MSTeams) */}
            <MSTeams></MSTeams>
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
      </div>
    </div>
  );
}

export default App;
