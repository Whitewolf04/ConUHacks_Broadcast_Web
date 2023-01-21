import logo from './logo.svg';
import './CSS/App.css';
import './Components/Discord'
import Discord from './Components/Discord';
import Entertainment from './Components/Entertainment';
import MSTeams from './Components/MSTeams';
import Grid from '@mui/material/Grid';
import Grid2 from '@mui/material/Unstable_Grid2';


function App() {
  return (
    <div>
      <div>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <MSTeams></MSTeams>
          </Grid>
          <Grid xs={6}>
            <Grid container spacing={2}>
              <Grid xs={6}>
                <Discord></Discord>
              </Grid>
              <Grid xs={6}>
                <Entertainment></Entertainment>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
