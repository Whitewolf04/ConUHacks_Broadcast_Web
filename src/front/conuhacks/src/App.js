import "./CSS/App.css";
import Discord from "./Components/Discord";
import Entertainment from "./Components/Entertainment";
import MSTeams from "./Components/MSTeams";
import GoogleCalendar from "./Components/Google Calendar";
import Header from "./Header";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import backgroundPic from "./main_background.webp";

const background = {
  backgroundContainer: {
    height: 800,
    backgroundImage: `url(${backgroundPic})`,
    backgroundSize: `cover`,
  },

  backgroundBlur: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
};

function App() {
  return (
    <Box
      sx={{ background: backgroundPic }}
      style={background.backgroundContainer}
    >
      <Box style={background.backgroundBlur}>
        <Box>
          <Header />
        </Box>
        <Box sx={{ p: 2 }}>
          <Grid container direction={'row'} justifyContent={'space-between'}>
            <Grid item lg={6} style="{{color: black}}">
              {/* Grid Big Left (MSTeams) */}
              <MSTeams />
            </Grid>
            <Grid container direction={'column'} justifyContent={'space-between'} lg={6}>
              <Grid container direction={'row'} justifyContent={'space-between'}>
                <Grid item lg={6}>
                  {/* Grid Small Upper left (Discord) */}
                  <Discord></Discord>
                </Grid>
                <Grid item lg={6}>
                  {/* Grid Small Upper Right (Entertainment) */}
                  <Entertainment></Entertainment>
                </Grid>
              </Grid>
              <Grid item>
                <GoogleCalendar></GoogleCalendar>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
